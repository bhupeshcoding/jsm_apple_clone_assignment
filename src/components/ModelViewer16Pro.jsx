import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MacbookPro2021 } from "./MacbookPro2021"; // your GLTF model

const ModelViewer = () => {
  const groupRef = useRef();

  const handleClick = () => {
    // Rotate Y axis by 90 degrees (π/2)
    groupRef.current.rotation.y += Math.PI / 2;
  };

  return (
    <group ref={groupRef} onClick={handleClick}>
      <MacbookPro2021 />
    </group>
  );
};

export default ModelViewer;
