import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  images: string[]; // Array of image URLs
  href: string;
}

const Card: React.FC<CardProps> = ({ title, description, images, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-alt-back text-foreground p-4 rounded-2xl shadow-lg w-64 hover:scale-102 transition-transform duration-300 z-20"
    >
      {/* Image Section */}
      <div className="relative w-full h-40 overflow-hidden rounded-lg">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        ) : (
          <div className="grid grid-cols-2 gap-1">
            {images.slice(0, 4).map((img, index) => (
              <div key={index} className="relative w-full h-20">
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Text Section */}
      <h3 className="text-xl font-bold mt-3">{title}</h3>
      <p className="text-sm text-alt-fore line-clamp-3">{description}</p>
    </a>
  );
};

const CardList: React.FC = () => {
  const cards = [
    {
      title: "Project Alpha",
      description: "This is a short description of the project.",
      images: [], 
      href: "https://example.com/project-alpha",
    },
    {
      title: "Futuristic Recorder",
      description:
        "A retrofuturistic recorder designed to be tactile and light",
      images: [
        "/projects/recorder_1.png",
        "/projects/recorder_2.png",
        "/projects/recorder_3.png"
      ],
      href: "https://example.com/design-concepts",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap p-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
