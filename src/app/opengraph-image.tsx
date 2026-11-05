import { ImageResponse } from "next/og";

// Preview image shown when the site link is shared (WhatsApp, LinkedIn, X, etc.)
export const alt = "Alfan Al Aniq Technical Services — HVAC, MEP & Fit-out, Dubai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #1B3350 0%, #12263D 55%, #0B1A2B 100%)",
          color: "#F6F3EC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 40 40">
            <path d="M8 30 L20 10 L32 30" stroke="#C9A463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M11 26 L29 26" stroke="#C9A463" strokeWidth="2" strokeLinecap="round" />
            <circle cx="20" cy="10" r="2" fill="#C9A463" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>Alfan Al Aniq</div>
            <div style={{ fontSize: 18, letterSpacing: 4, color: "#E2C48A" }}>TECHNICAL SERVICES</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08 }}>
            HVAC, ducting, MEP &amp; fit-out contractor
          </div>
          <div style={{ fontSize: 30, color: "#C9D2DA" }}>
            Dubai &amp; across the UAE · Est. 2021 · Licence No. 927018
          </div>
        </div>

        <div style={{ display: "flex", height: 4, width: 160, background: "#C9A463" }} />
      </div>
    ),
    size
  );
}
