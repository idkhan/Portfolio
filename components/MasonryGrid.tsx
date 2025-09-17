import React, { memo } from "react";
import Image from "next/image";

interface MasonryGridProps {
  images: string[][];
  col: number;
  className?: string
}

const MasonryGrid = memo<MasonryGridProps>(({ images, col, className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${col} gap-4`}>
      {images.map((column,columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
            {column.map((image,imageIndex) => (
                <div key={imageIndex}>
                    <Image
                    src={image}
                    alt="Showcase"
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="h-auto max-w-full rounded-lg hover:scale-102 duration-500"
                    loading="lazy"
                    />
                </div>
            ))}
        </div>
      ))}
    </div>
    </div>
  );
});

MasonryGrid.displayName = 'MasonryGrid';

export default MasonryGrid;
