// src/components/AnimatedMacbookPro2021.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedMacbookPro2021 = (props) => {
  const groupRef = useRef();
  const lidRef = useRef();
  const { nodes, materials } = useGLTF("/models/macbook_pro_2021.glb");

  // Inspect your GLTF to get actual mesh names
  // Use console.log or scene.traverse for deeper inspection

  useEffect(() => {
    if (!lidRef.current) return;

    gsap.to(lidRef.current.rotation, {
      x: -Math.PI / 1.8, // open angle
      duration: 2,
      scrollTrigger: {
        trigger: "#macbook-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <group {...props} ref={groupRef} dispose={null} scale={2}>
      {/* Screen & Lid Group */}
      <group ref={lidRef} position={[0.121, 0.007, 0]} scale={[6, 6, 6]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>

      {/* Base */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
};

useGLTF.preload("/models/macbook_pro_2021.glb");
