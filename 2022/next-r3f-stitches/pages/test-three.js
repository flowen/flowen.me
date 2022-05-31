import { useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Box({ z }) {
  const ref = useRef();
  const { viewport, camera } = useThree();

  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [pos] = useState({
    x: THREE.MathUtils.randFloatSpread(width),
    y: THREE.MathUtils.randFloatSpread(height),
  });

  useFrame(({ clock }) => {
    // console.log(pos);

    ref.current.position.set(pos.x, (pos.y += 0.035), z);

    if (pos.y > height / 1.5) {
      pos.y = -height / 1.5;
    }
  });

  return (
    <mesh ref={ref} position={[0, pos.y, 0]} rotation={[0, 0, 0]}>
      <boxGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

export default function Home({ count = 250 }) {
  return (
    <Canvas>
      {Array.from({ length: count }, (_, i) => (
        <Box key={i} z={-i} />
      ))}
    </Canvas>
  );
}
