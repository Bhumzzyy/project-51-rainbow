
import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";

const ROOT = path.resolve(process.cwd(), "public");

const DELETE_ORIGINALS = process.argv.includes("--delete-originals");
const OVERWRITE = process.argv.includes("--overwrite");

// Supported formats
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg"];

const VIDEO_EXTENSIONS = [
  ".mov",
  ".avi",
  ".mkv",
  ".webm",
  ".m4v",
  ".flv",
  ".wmv",
];

let convertedImages = 0;
let convertedVideos = 0;
let skipped = 0;
let failed = 0;

async function convertImage(file) {
  const output = file.replace(/\.(png|jpe?g)$/i, ".webp");

  try {
    if (!OVERWRITE && await exists(output)) {
      console.log(`SKIPPED: ${file}`);
      skipped++;
      return;
    }

    await sharp(file)
      .webp({
        quality: 85,
        effort: 6,
        alphaQuality: 100,
      })
      .toFile(output);

    console.log(`IMAGE: ${file} → ${output}`);
    convertedImages++;

    if (DELETE_ORIGINALS) {
      await fs.unlink(file);
      console.log(`DELETED ORIGINAL: ${file}`);
    }
  } catch (error) {
    console.error(`IMAGE ERROR: ${file}`, error.message);
    failed++;
  }
}

async function convertVideo(file) {
  const output = file.replace(/\.[^.]+$/, ".mp4");

  try {
    if (!ffmpegPath) {
      throw new Error("FFmpeg binary is unavailable.");
    }

    if (!OVERWRITE && await exists(output)) {
      console.log(`SKIPPED: ${file}`);
      skipped++;
      return;
    }

    await new Promise((resolve, reject) => {
      const args = [
        "-y",
        "-i", file,
        "-map", "0:v:0",
        "-map", "0:a?",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "23",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "192k",
        "-movflags", "+faststart",
        output,
      ];

      const process = spawn(ffmpegPath, args, {
        stdio: "inherit",
      });

      process.on("error", reject);

      process.on("close", (code) => {
        if (code === 0) resolve();
        else reject(new Error(`FFmpeg exited with code ${code}`));
      });
    });

    console.log(`VIDEO: ${file} → ${output}`);
    convertedVideos++;

    if (DELETE_ORIGINALS) {
      await fs.unlink(file);
      console.log(`DELETED ORIGINAL: ${file}`);
    }
  } catch (error) {
    console.error(`VIDEO ERROR: ${file}`, error.message);
    failed++;
  }
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function scanFolder(folder) {
  const entries = await fs.readdir(folder, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const file = path.join(folder, entry.name);

    if (entry.isDirectory()) {
      await scanFolder(file);
      continue;
    }

    if (!entry.isFile()) continue;

    const ext = path.extname(file).toLowerCase();

    if (IMAGE_EXTENSIONS.includes(ext)) {
      await convertImage(file);
    } else if (VIDEO_EXTENSIONS.includes(ext)) {
      await convertVideo(file);
    }
  }
}

async function main() {
  console.log("\n==================================");
  console.log("       MEDIA CONVERTER");
  console.log("==================================\n");

  console.log(`Scanning: ${ROOT}`);
  console.log(`Delete originals: ${DELETE_ORIGINALS}`);
  console.log(`Overwrite existing: ${OVERWRITE}\n`);

  if (!(await exists(ROOT))) {
    console.error("Public folder not found!");
    process.exitCode = 1;
    return;
  }

  await scanFolder(ROOT);

  console.log("\n==================================");
  console.log("       CONVERSION SUMMARY");
  console.log("==================================");
  console.log(`Images converted: ${convertedImages}`);
  console.log(`Videos converted: ${convertedVideos}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log("==================================\n");
}

main().catch((error) => {
  console.error("Conversion failed:", error);
  process.exitCode = 1;
});


// to covert JPG/PNG images into Webp images
// npm run media:convert

// to delete JPG/PNG images from folder
// npm run media:clean