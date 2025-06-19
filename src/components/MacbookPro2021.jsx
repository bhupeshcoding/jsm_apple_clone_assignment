// src/components/MacbookPro2021.jsx
import React from "react";
import { useGLTF } from "@react-three/drei";

export function MacbookPro2021(props) {
  const { nodes, materials } = useGLTF("/models/macbook_pro_2021.glb");

  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

useGLTF.preload("/models/macbook_pro_2021.glb");
