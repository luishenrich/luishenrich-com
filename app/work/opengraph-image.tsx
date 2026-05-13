import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const runtime = "edge";
export const alt = "Work · Luis Henrich-Bandis";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    title: "Work",
    label: "luishenrich.com / work",
  });
}
