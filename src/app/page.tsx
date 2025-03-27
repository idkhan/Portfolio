"use client";
import { useRef, useEffect, useState } from "react";
import Header from "../../components/Header";
import { CaretDoubleDown } from "@phosphor-icons/react";
import CardList from "../../components/Card";
import MasonryGrid from "../../components/MasonryGrid";
import Link from "next/link";

export default function Home() {
  const myRef = useRef(null);
  const [titleIsVisible, setTitleIsVisible] = useState(true)
  useEffect(() => {
    if(!myRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setTitleIsVisible(entry.isIntersecting);
    })
    observer.observe(myRef.current);
    return () => observer.disconnect();
  }, []);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    [
      "/projects/samsung_3.png",
      "/projects/recorder_2.png",
    ],
    [
      "/projects/recorder_1.png",
      "/projects/perfume_1.png"
    ],
    [
      "/projects/perfume_2.png",
      "/projects/glass_2.png"
    ],
    [
      "/projects/space.png",
      "/projects/glass_1.png"
    ]
  ];

  return (
    <div className="scroll-smooth overflow-y-scroll md:snap-proximity md:snap-y h-screen font-Poppins transition-all duration-500 pointer-events-none">
      <Header opacity={Number(!titleIsVisible) * 100}></Header>
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative p-8 pb-20 gap-16 sm:p-20 snap-start pointer-events-auto">
        <main
          className={`transition-all duration-500 relative`}
        >
          <div className={`transition-all duration-500 font-Impact text-6xl lg:text-9xl tracking-wider uppercase`}>
            <h1>IBRAHIM KHAN</h1>
            <div ref={myRef} className={` font-Poppins text-lg lg:text-xl lg:pl-1 font-bold uppercase tracking-normal`}>
              <h1 ref={myRef}>Animation, Design, CAD</h1>
            </div>
          </div>
        </main>
        <Link href={""} onClick={() => scrollToSection("section-2")}>
          <CaretDoubleDown className="animate-pull" size={32} />
        </Link>
      </section>

      {/* Content Sections */}
      <section id="section-2" className="bg-accent snap-start text-accent-text relative px-6 pt-16 pb-2 md:pt-12 pointer-events-auto">
      <h1 className="mb-2 mt-2 font-black">SHOWCASE</h1>
        <MasonryGrid images={images} col={4} className="mb-2"/>
        <p className="font-bold italic text-xs">All works showcased here are entirely created by me, without the use of generative AI</p>
      </section>

      <section id="projects" className="h-screen bg-background snap-start relative -z-10 p-6 pt-12 pointer-events-auto">
        <h1 className="mb-2 mt-2 font-black">PROJECTS</h1>
        <CardList></CardList>
        <div className="wireframe-grid relative invert dark:invert-0"></div>
      </section>
    </div>
  );
}
