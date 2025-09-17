'use client'
import Header from "../../../../components/Header";
import ModelViewer from "../../../../components/ModelViewer";
import { CaretDoubleDown } from "@phosphor-icons/react";

export default function Page() {
  return (
    <div className="relative scroll-smooth overflow-y-scroll md:snap-proximity md:snap-y h-screen font-Poppins transition-all duration-500 pointer-events-none">
      <Header opacity={100} />

      <ModelViewer 
        modelPath="/recorder.glb"
        scale={0.5}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI/6, 0]}
      />

      <section className="h-screen flex flex-col items-center justify-center relative p-8 pb-20 gap-16 sm:p-20 snap-start pointer-events-none dark:bg-black/10 bg-white/10">
        <div className="typewriter">
          <h1 className="transition-all duration-500 font-Impact text-4xl lg:text-6xl tracking-wider uppercase text-foreground drop-shadow-lg">
            Recorder
          </h1>
        </div>
        <CaretDoubleDown className="animate-pull text-foreground" size={32} />
      </section>
    </div>
  );
}
