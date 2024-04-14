import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function PhotoCard({ photo }) {
  return (
    <Link href={`photos/${photo.id}`} className="group">
      <Image src={photo.url} alt="" width={700} height={700} />

      <div className="title-container">
        <h4 className="title">The {photo.title}</h4>
      </div>
    </Link>
  );
}
