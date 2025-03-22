"use client";
import { useRef, useEffect, useState } from "react";
import Header from "../../components/Header";
import { CaretDoubleDown } from "@phosphor-icons/react";
import CardList from "../../components/Card";

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
  
  return (
    <div className="scroll-smooth overflow-y-scroll snap-proximity snap-y h-screen font-Poppins transition-all duration-500 pointer-events-none">
      <Header opacity={Number(!titleIsVisible) * 100}></Header>
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative p-8 pb-20 gap-16 sm:p-20 snap-start pointer-events-auto">
        <main
          className={`transition-all duration-500 relative`}
        >
          <div className={`transition-all duration-500 font-[Impact] text-6xl lg:text-9xl tracking-wider uppercase`}>
            <h1>IBRAHIM KHAN</h1>
            <div ref={myRef} className={` font-Poppins text-lg lg:text-xl lg:pl-1 font-bold uppercase tracking-normal`}>
              <h1 ref={myRef}>Animation, Design, CAD</h1>
            </div>
          </div>
        </main>
        <a href="#section-2">
          <CaretDoubleDown className="animate-pull" size={32} />
        </a>
      </section>

      {/* Content Sections */}
      <section id="section-2" className="h-screen grid grid-cols-3 gap-6 items-center justify-center bg-accent snap-start text-accent-text relative -z-10 p-6 pointer-events-auto">
          <CardList></CardList>
        <div className="wireframe-grid relative"></div>
      </section>

      <section className="h-screen flex items-center justify-center bg-gray-900 snap-start text-white pointer-events-auto">
        <p className="text-2xl">Another Section</p>
      </section>
    </div>
  );
}
