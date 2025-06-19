import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AnimatedMacbookPro2021 } from "./AnimatedMacbookPro2021";

const CanvasWrapperExample = () => {
  return (
    <div id="macbook-section" className="h-[100vh] bg-black">
      <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <AnimatedMacbookPro2021 />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default CanvasWrapperExample;
