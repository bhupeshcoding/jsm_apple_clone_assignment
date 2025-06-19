import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model16Pro } from "./Model16Pro";

const CanvasWrapper = () => {
  return (
    <div id="macbook-section" className="h-[100vh] bg-black">
      <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Model16Pro />
        <OrbitControls enableZoom={false} />

        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;

// import React, { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import { Model16Pro } from "./Model16Pro";
// const CanvasWrapper = () => {
//   const controlRef = useRef();
//   const [rotationState, setRotationState] = useState(0);

//   useEffect(() => {
//     if (!controlRef.current) return;

//     // Optional: Limit rotation or pan
//     controlRef.current.enableDamping = true;
//     controlRef.current.dampingFactor = 0.05;
//     controlRef.current.minPolarAngle = Math.PI / 3; // Downward limit
//     controlRef.current.maxPolarAngle = Math.PI / 1.5; // Upward limit
//     controlRef.current.enableZoom = true;
//     controlRef.current.zoomSpeed = 0.8;
//     controlRef.current.enablePan = true;
//     controlRef.current.rotateSpeed = 1;
//   }, []);

//   return (
//     <div id="macbook-section" className="h-[100vh] bg-black">
//       <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[10, 10, 5]} intensity={1.5} />
//         <Model16Pro />
//         <OrbitControls
//           ref={controlRef}
//           target={new THREE.Vector3(0, 0, 0)}
//           onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
//         />
//       </Canvas>
//     </div>
//   );
// };
// export default CanvasWrapper;

// src/components/CanvasWrapper.jsx
// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import { Model16Pro } from "./Model16Pro";

// const CameraSettings = {
//   position: [0, 1, 4],
//   fov: 45,
// };

// const CanvasWrapper = () => {
//   const controlRef = useRef(null);
//   const [rotationAngle, setRotationAngle] = useState(0);

//   // Track azimuthal rotation angle
//   const updateRotation = useCallback(() => {
//     if (controlRef.current) {
//       setRotationAngle(controlRef.current.getAzimuthalAngle());
//     }
//   }, []);

//   // Keep camera angle in sync on each frame
//   useFrame(() => {
//     if (controlRef.current) {
//       setRotationAngle(controlRef.current.getAzimuthalAngle());
//     }
//   });

//   // Initialize OrbitControls settings
//   useEffect(() => {
//     const controls = controlRef.current;
//     if (!controls) return;

//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.minPolarAngle = Math.PI / 3;
//     controls.maxPolarAngle = Math.PI / 1.5;
//     controls.enableZoom = true;
//     controls.zoomSpeed = 0.75;
//     controls.enablePan = false;
//     controls.rotateSpeed = 1;
//     controls.target.set(0, 0, 0);
//     controls.update();
//   }, []);

//   return (
//     <div
//       id="macbook-section"
//       className="relative h-screen bg-black overflow-hidden"
//     >
//       {/* Optional: Overlay Heading */}
//       <div className="absolute top-1/4 w-full text-center z-10 px-4">
//         <h1 className="text-white text-3xl md:text-5xl font-bold">
//           Start with a Vision. Deliver with Precision.
//         </h1>
//       </div>

//       <Canvas camera={CameraSettings}>
//         {/* Lights */}
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[10, 10, 5]} intensity={1.5} />

//         {/* 3D Model */}
//         <Model16Pro />

//         {/* OrbitControls */}
//         <OrbitControls ref={controlRef} makeDefault onEnd={updateRotation} />
//       </Canvas>
//     </div>
//   );
// };

// export default CanvasWrapper;

// import React, { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Model16Pro } from "./Model16Pro";
// import CameraController from "./CameraController";

// const CanvasWrapper = () => {
//   const [rotationAngle, setRotationAngle] = useState(0);

//   return (
//     <div
//       id="macbook-section"
//       className="relative h-screen bg-black overflow-hidden"
//     >
//       <div className="absolute top-1/4 w-full text-center z-10 px-4">
//         <h1 className="text-white text-3xl md:text-5xl font-bold">
//           Start with a Vision. Deliver with Precision.
//         </h1>
//       </div>

//       <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[10, 10, 5]} intensity={0.5} />
//         <Model16Pro />
//         <CameraController onRotate={setRotationAngle} />
//       </Canvas>
//     </div>
//   );
// };

// export default CanvasWrapper;
