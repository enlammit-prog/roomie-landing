import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ROOMIE — Encontrá con quién vivir, sin jugártela a ciegas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1124",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(circle at 10% 90%, rgba(29,78,216,0.35), transparent 55%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #1D4ED8, #7C3AED)",
              color: "#fff",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#F8FAFC",
            }}
          >
            ROOMIE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <div style={{ fontSize: 22, color: "#A6B2CC", fontWeight: 500 }}>
              Para estudiantes que llegan del interior a Montevideo
            </div>
          </div>

          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1,
              color: "#F8FAFC",
              maxWidth: 980,
            }}
          >
            Encontrá con quién vivir, sin jugártela a ciegas.
          </div>

          <div
            style={{
              fontSize: 24,
              lineHeight: 1.5,
              color: "#A6B2CC",
              maxWidth: 820,
            }}
          >
            ROOMIE conecta estudiantes del interior y de intercambio con
            roommates verificados y compatibles en Montevideo.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 6,
            width: 220,
            borderRadius: 4,
            background: "linear-gradient(90deg, #1D4ED8, #7C3AED)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
