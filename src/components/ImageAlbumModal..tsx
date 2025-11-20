// app/components/ImageAlbumModal.tsx
'use client';

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  onClose: () => void;
};

export default function ImageAlbumModal({ images, onClose }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl font-bold"
      >
        ✕
      </button>

      <div className="relative w-[80%] h-[70%]">
        <Image
          src={images[index]}
          alt={`Gallery image ${index + 1}`}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Controls */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-12 text-white text-3xl">
  <button
    onClick={prev}
    className="hover:text-fuchsia-300 transition-transform hover:scale-125"
    aria-label="Previous image"
  >
    ←
  </button>
  <button
    onClick={next}
    className="hover:text-fuchsia-300 transition-transform hover:scale-125"
    aria-label="Next image"
  >
    →
  </button>
</div>

    </div>
  );
}
