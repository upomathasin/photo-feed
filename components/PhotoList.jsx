import React from "react";

export default function PhotoList({ photos }) {
  return (
    <div>
      <h1>Photo list</h1>
      <div className="grid grid-cols-3 gap-3">
        {photos.map((photo, index) => {
          return (
            <div key={photo.id}>
              <img src={photo.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
