'use client'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Header from "../../../../components/Header";
import { CaretDoubleDown } from "@phosphor-icons/react";

function Model() {
  const { scene } = useGLTF("/recorder.glb");
  return <primitive object={scene} scale={.5} position={[0, 0, 0]} rotation={[0,-Math.PI/6, 0]}/>;
}

export default function Page() {
  return (
    <div className="relative scroll-smooth overflow-y-scroll md:snap-proximity md:snap-y h-screen font-Poppins transition-all duration-500 pointer-events-none">
      <Header opacity={100} />

      {/* Three.js Background */}
      <div className="absolute inset-0 -z-10 bg-white">
        <Canvas camera={{ position: [0, 10, 0], fov: 40 }}>
          <ambientLight intensity={0.75} />
          <directionalLight position={[5, 1, 0]} intensity={2} color={"white"} />
          <directionalLight position={[-5, -1, 0]} intensity={1} color={"#e8aa3f"} />
          <Model/>
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>

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
