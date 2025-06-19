// src/components/CameraController.jsx
import { useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const CameraController = ({ onRotate }) => {
  const controlRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = controlRef.current;
    if (!controls) return;

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.enableZoom = false;
    controls.zoomSpeed = 0.5;
    controls.duration = 2;
    controls.enablePan = false;
    controls.rotateSpeed = 0.5;
    controls.target.set(0, 0, 0);
    controls.update();
  }, []);

  useFrame(() => {
    if (controlRef.current && onRotate) {
      onRotate(controlRef.current.getAzimuthalAngle());
    }
  });

  return <OrbitControls ref={controlRef} args={[camera, gl.domElement]} />;
};

export default CameraController;
