import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const runtime = "edge";
export const alt = "About · Luis Henrich-Bandis";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    title: "About",
    label: "luishenrich.com / about",
  });
}
