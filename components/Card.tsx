import React, { memo, useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  image?: string;
  href: string;
}

const Card = memo<CardProps>(({ title, image, href }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(href);
  }, [router, href]);

  // Skip rendering if no image
  if (!image) return null;

  return (
    <div 
  className="relative w-full aspect-square overflow-hidden shadow-lg group cursor-pointer bg-accent duration-300 hover:bg-accent-pop focus-within:bg-accent-pop rounded-lg"
  onClick={handleClick}
  role="button"
  aria-label={`Go to ${title}`}
  tabIndex={0}
>
  {/* Image Wrapper */}
  <div className="relative w-full h-full">
    <Image 
      src={image} 
      alt={title} 
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      className="object-contain transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105 p-6 dark:invert-0"
      priority={false}
    />
  </div>
  
  {/* Title Overlay */}
  <div className="absolute bottom-0 w-full bg-background text-accent p-4 text-lg font-bold translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300">
    {title}
  </div>
</div>

  );
});

Card.displayName = 'Card';

const CardList = memo(() => {
  const cards = useMemo(() => [
    {
      title: "Submarine",
      image: "/iconset/Submarine.png", 
      href: "/projects/submarine"
    },
    {
      title: "Recorder",
      image: "/iconset/Recorder.png",
      href: "/projects/recorder"
    },
  ], []);

  const splitIntoColumns = useCallback((cards: CardProps[], numColumns: number) => {
    return Array.from({ length: numColumns }, (_, i) =>
      cards.filter((_, index) => index % numColumns === i)
    );
  }, []);

  const colNumber = 3;
  const columns = useMemo(() => splitIntoColumns(cards, colNumber), [cards, splitIntoColumns, colNumber]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {columns.map((column: CardProps[], columnIndex: number) => (
        <div className="grid gap-4" key={columnIndex}>
          {column.map((card: CardProps, index: number) => (
            <Card key={index} {...card} />
          ))}
        </div>
      ))}
    </div>
  );
});

CardList.displayName = 'CardList';

export default CardList;
