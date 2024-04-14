import React from "react";
import PhotoCard from "./PhotoCard";

export default function PhotoList({ photos }) {
  return (
    <div className="img-grid">
      {photos.map((photo, index) => {
        return <PhotoCard key={photo.id} photo={photo}></PhotoCard>;
      })}
    </div>
  );
}
