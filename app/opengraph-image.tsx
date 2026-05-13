import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const runtime = "edge";
export const alt = "Luis Henrich-Bandis";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    title: "Luis Henrich-Bandis",
    label: "luishenrich.com",
  });
}
