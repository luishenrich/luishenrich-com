import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgProps = {
  title: string;
  label?: string;
};

export function renderOgImage({ title, label = "luishenrich.com" }: OgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          color: "#fafafa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, sans-serif',
        }}
      >
        <div
          style={{
            color: "#737373",
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: 4,
            fontWeight: 500,
          }}
        >
          {label}
        </div>

        <div
          style={{
            fontSize: title.length > 60 ? 64 : 80,
            fontWeight: 600,
            letterSpacing: -2,
            lineHeight: 1.05,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              background: "#3b82f6",
            }}
          />
          <div style={{ color: "#a3a3a3", fontSize: 28 }}>
            Luis Henrich-Bandis
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
