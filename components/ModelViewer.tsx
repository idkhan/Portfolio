import React, { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  ambientIntensity?: number;
  directionalLights?: Array<{
    position: [number, number, number];
    intensity: number;
    color: string;
  }>;
}

const Model = memo<{ modelPath: string; scale: number; position: [number, number, number]; rotation: [number, number, number] }>(
  ({ modelPath, scale, position, rotation }) => {
    const { scene } = useGLTF(modelPath);
    return (
      <primitive 
        object={scene} 
        scale={scale} 
        position={position} 
        rotation={rotation}
      />
    );
  }
);

Model.displayName = 'Model';

const ModelViewer = memo<ModelViewerProps>(({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ambientIntensity = 0.75,
  directionalLights = [
    { position: [5, 1, 0] as [number, number, number], intensity: 2, color: "white" },
    { position: [-5, -1, 0] as [number, number, number], intensity: 1, color: "#e8aa3f" }
  ]
}) => {
  return (
    <div className="absolute inset-0 -z-10 bg-white">
      <Canvas camera={{ position: [0, 10, 0], fov: 40 }}>
        <ambientLight intensity={ambientIntensity} />
        {directionalLights.map((light, index) => (
          <directionalLight
            key={index}
            position={light.position}
            intensity={light.intensity}
            color={light.color}
          />
        ))}
        <Model 
          modelPath={modelPath}
          scale={scale}
          position={position}
          rotation={rotation}
        />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
});

ModelViewer.displayName = 'ModelViewer';

export default ModelViewer;
