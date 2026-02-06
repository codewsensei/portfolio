import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";

function FloatingOrb({ position, scale }) {
  const mesh = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.4;

    mesh.current.rotation.y += 0.001;
    mesh.current.rotation.x = mouse.y * 0.3;
    mesh.current.rotation.y += mouse.x * 0.3;
  });

  return (
    <Sphere ref={mesh} args={[1, 32, 32]} position={position} scale={scale}>
      <meshStandardMaterial
        color="#4ade80"
        transparent
        opacity={0.35}
        roughness={0.4}
        metalness={0.1}
      />
    </Sphere>
  );
}

export default function ProfileScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      dpr={[1, 2]}
    >
      {/* LIGHTING */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* ORBS */}
      <FloatingOrb position={[-4, 0, -4]} scale={1.4} />
      <FloatingOrb position={[3, 1, -3]} scale={1.1} />
      <FloatingOrb position={[0, -2, -2]} scale={1.6} />
      <FloatingOrb position={[2, -3, -5]} scale={1.2} />
    </Canvas>
  );
}
