import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "ROOMIE — La app de roommates para estudiantes en Montevideo. Próximamente.";
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
            "radial-gradient(circle at 85% 15%, rgba(232,129,74,0.38), transparent 58%), radial-gradient(circle at 8% 92%, rgba(240,168,104,0.16), transparent 55%)",
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
                "linear-gradient(135deg, #F0A868, #E8814A)",
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
                backgroundColor: "#F0A868",
              }}
            />
            <div style={{ fontSize: 22, color: "#A6B2CC", fontWeight: 500 }}>
              En construcción · etapa inicial
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
            La forma más segura de encontrar roommate en Montevideo.
          </div>

          <div
            style={{
              fontSize: 24,
              lineHeight: 1.5,
              color: "#A6B2CC",
              maxWidth: 820,
            }}
          >
            La estamos construyendo: perfiles verificados y compatibles para
            estudiantes del interior y de intercambio.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 6,
            width: 220,
            borderRadius: 4,
            background: "linear-gradient(90deg, #F0A868, #E8814A)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
