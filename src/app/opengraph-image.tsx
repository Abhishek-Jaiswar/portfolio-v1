import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const alt = "Abhishek Jaiswar — Software Engineer";
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
          backgroundColor: "#f7f6f3",
          color: "#131313",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 9999,
              backgroundColor: "#131313",
              color: "#f7f6f3",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 600 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#4f46e5",
              fontWeight: 600,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 940,
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#6b6b6b",
              maxWidth: 900,
            }}
          >
            Building scalable web applications with React, Next.js, Node.js, and
            PostgreSQL.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(19,19,19,0.12)",
            paddingTop: 28,
            fontSize: 24,
            color: "#6b6b6b",
          }}
        >
          <span>{site.location}</span>
          <span style={{ color: "#131313", fontWeight: 600 }}>
            tridex.in
          </span>
        </div>
      </div>
    ),
    size
  );
}
