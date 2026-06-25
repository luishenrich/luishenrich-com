import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "StudyPDF pitch deck · Luis Henrich-Bandis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // The title slide, pre-rendered to a 1200x630 PNG on the deck's cream backdrop.
  const file = await readFile(
    join(process.cwd(), "public/deck/opengraph-source.png"),
  );
  const src = `data:image/png;base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f7f4e3",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={1200} height={630} alt="" />
      </div>
    ),
    { ...size },
  );
}
