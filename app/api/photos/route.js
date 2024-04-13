import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export function GET() {
  const photos = getAllPhotos();

  return NextResponse.json(photos);
}
