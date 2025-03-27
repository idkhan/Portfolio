import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  image?: string; // Make optional to handle missing images
  href: string;
}

const Card: React.FC<CardProps> = ({ title, image, href }) => {
  const router = useRouter();

  // Skip rendering if no image
  if (!image) return null;

  return (
    <div 
  className="relative w-full aspect-square overflow-hidden shadow-lg group cursor-pointer bg-accent duration-300 hover:bg-accent-pop focus-within:bg-accent-pop"
  onClick={() => router.push(href)}
  role="button"
  aria-label={`Go to ${title}`}
  tabIndex={0} // Allows focus on mobile
>
  {/* Image Wrapper */}
  <div className="relative w-full h-full">
    <Image 
      src={image} 
      alt={title} 
      fill
      className="object-contain transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105 p-6 dark:invert-0"
    />
  </div>
  
  {/* Title Overlay */}
  <div className="absolute bottom-0 w-full bg-background text-accent p-4 text-lg font-bold translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300">
    {title}
  </div>
</div>

  );
};

const CardList: React.FC = () => {
  const cards = [
    {
      title: "Submarine",
      image: "/iconset/Submarine.png", 
      href: "https://example.com/project-alpha"
    },
    {
      title: "Recorder",
      image: "/iconset/Recorder.png",
      href: "https://example.com/design-concepts"
    },
  ];

  const splitIntoColumns = (cards: CardProps[], numColumns: number) => {
    return Array.from({ length: numColumns }, (_, i) =>
      cards.filter((_, index) => index % numColumns === i)
    );
  };

  const colNumber = 3;
  const columns = splitIntoColumns(cards,colNumber);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {columns.map((column,columnIndex) => (
        <div className="grid gap-4" key={columnIndex}>
          {column.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardList;
