import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";

function Orb() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.001;
  });

  return (
    <Sphere ref={ref} args={[2.8, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#6366f1"
        distort={0.4}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  );
}

export default function ProfileBG3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={1} />
      <Orb />
    </Canvas>
  );
}
