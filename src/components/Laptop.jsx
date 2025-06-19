// src/components/Laptop.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Laptop = () => {
  const gltf = useGLTF("/models/macbook_pro_2021.glb");
  const lid = gltf.scene.getObjectByName("Lid"); // match mesh name from Blender
  const groupRef = useRef();

  useEffect(() => {
    if (!lid) return;

    gsap.to(lid.rotation, {
      x: 0, // Animate lid open angle
      duration: 1,
      scrollTrigger: {
        trigger: groupRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, [lid]);

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Laptop;
