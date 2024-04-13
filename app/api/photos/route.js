import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export function GET() {
  const photos = getAllPhotos();

  console.log(photos);
  return NextResponse.json(photos);
}
