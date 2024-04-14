"use client";
import React, { useState } from "react";

export default function LanguageSwitcher() {
  const [showManu, setShowManu] = useState(false);

  return (
    <div className="relative">
      <button className="flex items-center gap-2">
        <img className="max-w-8" src="/bd.png" alt="bangla" />
        Bangla
      </button>

      {showManu && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
          <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <img className="max-w-8" src="/bd.png" alt="bangla" />
            Bangla
          </li>
          <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <img className="max-w-8" src="/usa.png" alt="bangla" />
            English
          </li>
        </div>
      )}
    </div>
  );
}
