import type { DivIcon, DivIconOptions } from "leaflet";

/**
 * 51 Rainbow map pin, drawn as inline SVG (no image file).
 * viewBox 40x52, the pin tip is at the bottom centre (20, 50).
 * The "5" and "1" are stroked paths, so they do not depend on any font.
 */
const PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 52" width="100%" height="100%" role="img" aria-hidden="true" focusable="false">
  <ellipse cx="20" cy="50" rx="7" ry="2" fill="#281E19" opacity="0.18"/>
  <path d="M20 50C20 50 3 31 3 19a17 17 0 1 1 34 0C37 31 20 50 20 50Z" fill="#F1592B"/>
  <path d="M20 50C20 50 3 31 3 19a17 17 0 1 1 34 0C37 31 20 50 20 50Z" fill="none" stroke="#FFFCEE" stroke-width="1.5" opacity="0.9"/>
  <g transform="translate(1.5 0)" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16.5 12.5H10.8L10.3 18.2C11.2 17.6 12.2 17.3 13.3 17.3C15.6 17.3 17 18.8 17 21.2C17 23.6 15.4 25.2 13.2 25.2C11.6 25.2 10.3 24.5 9.6 23.4"/>
    <path d="M23.8 14.2L27.4 12.5V25.4"/>
  </g>
</svg>`;

export const PIN_SIZE = { normal: [40, 52], selected: [50, 65] } as const;

export function createPinIcon(L: typeof import("leaflet"), selected = false): DivIcon {
  const [w, h] = selected ? PIN_SIZE.selected : PIN_SIZE.normal;
  const options: DivIconOptions = {
    className: `store-pin${selected ? " store-pin--selected" : ""}`, // no default leaflet box styles
    html: PIN_SVG,
    iconSize: [w, h],
    iconAnchor: [w / 2, (h * 50) / 52], // tip sits on the coordinate (50/52 of viewBox height)
    popupAnchor: [0, -h + 8],
  };
  return L.divIcon(options);
}
