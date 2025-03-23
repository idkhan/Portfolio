import React from "react";
import Image from "next/image";

interface MasonryGridProps {
  images: string[];
  col: number;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images, col }) => {
    
    const splitIntoColumns = (images: string[], numColumns: number) => {
        return Array.from({ length: numColumns }, (_, i) =>
          images.filter((_, index) => index % numColumns === i)
        );
      };
    
      const columns = splitIntoColumns(images,col);
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${col} gap-4`}>
      {columns.map((column,columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
            {column.map((image,imageIndex) => (
                <div key={imageIndex}>
                    <Image
                    src={image}
                    alt={"Showcase"}
                    width={500}
                    height={500}
                    className="h-auto max-w-full rounded-lg"
                    />
                </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
