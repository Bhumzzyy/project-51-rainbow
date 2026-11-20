export default function LegacyLoading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeContent: "center",
        backgroundColor: "#e6ca64ff",
        color: "#28231F",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-recoleta-full), 'Recoleta', Georgia, serif",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#B9272F",
            marginBottom: "8px",
          }}
        >
          SAME ICE CREAM.
        </p>
        <h2
          style={{
            fontFamily: "var(--font-recoleta-full), 'Recoleta', Georgia, serif",
            fontSize: "32px",
            fontWeight: 900,
            color: "#B9272F",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          A LEGACY IN EVERY SCOOP.
        </h2>
      </div>
    </div>
  );
}
