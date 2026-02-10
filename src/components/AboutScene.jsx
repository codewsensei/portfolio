import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function BlackholeField({ isDarkMode }) {
  const ref = useRef();
  const { mouse } = useThree();

  const data = useMemo(() => {
    const count = 10000;
    const positions = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * 12 + 1;
      const a = Math.random() * Math.PI * 2;

      const x = Math.cos(a) * r;
      const y = (Math.random() - 0.5) * 4;
      const z = Math.sin(a) * r;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      base[i3] = x;
      base[i3 + 1] = y;
      base[i3 + 2] = z;
    }

    return { positions, base, count };
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < data.count; i++) {
      const i3 = i * 3;

      const bx = data.base[i3];
      const by = data.base[i3 + 1];
      const bz = data.base[i3 + 2];

      const mx = mouse.x * 6;
      const my = mouse.y * 4;

      const dx = mx - bx;
      const dy = my - by;
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.6;

      const force = Math.min(1 / dist, 0.15);

      pos[i3] += dx * force * 0.05;
      pos[i3 + 1] += dy * force * 0.05;
      pos[i3 + 2] += -force * 0.8;

      // ease back to base (stability)
      pos[i3] += (bx - pos[i3]) * 0.01;
      pos[i3 + 1] += (by - pos[i3 + 1]) * 0.01;
      pos[i3 + 2] += (bz - pos[i3 + 2]) * 0.01;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y += 0.001;
  });

  return (
    <Points ref={ref} positions={data.positions} stride={3}>
      <PointMaterial
        // Light mode mein dark grey (#333) aur Dark mode mein white (#ffffff)
        color={isDarkMode ? "#ffffff" : "#333333"} 
        size={0.06}
        sizeAttenuation
        transparent
        opacity={isDarkMode ? 0.8 : 0.4} // Light mode mein thodi opacity kam rakhi hai soft look ke liye
        depthWrite={false}
      />
    </Points>
  );
}

export default function AboutScene({ isDarkMode }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 60 }}
      dpr={[1, 2]}
      // Performance optimization
      gl={{ antialias: false, alpha: true }} 
    >
      <ambientLight intensity={isDarkMode ? 1 : 1.5} />
      <BlackholeField isDarkMode={isDarkMode} />
    </Canvas>
  );
}