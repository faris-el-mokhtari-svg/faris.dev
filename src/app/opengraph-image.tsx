import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFCF3",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "48px" }}>
          <span style={{ color: "#FF5500", fontSize: 24, fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
            DEPLOY
          </span>
          <span style={{ color: "rgba(255,85,0,0.45)", fontSize: 24, fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", marginLeft: "6px" }}>
            CHANGE
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px", marginBottom: "40px" }}>
          <span style={{ fontSize: 100, fontWeight: 800, lineHeight: 0.88, color: "#111" }}>
            Smarte Systeme.
          </span>
          <span style={{ fontSize: 100, fontWeight: 800, lineHeight: 0.88, color: "#FF5500" }}>
            Starke Betriebe.
          </span>
        </div>

        {/* Subline */}
        <p style={{ fontSize: 26, color: "rgba(0,0,0,0.42)", margin: 0, lineHeight: 1.4 }}>
          Webentwicklung für Gastronomie und lokale KMU im DACH-Raum. Live in 4 Tagen.
        </p>
      </div>
    ),
    { ...size }
  );
}
