import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from '../context/ScrollContext';
import { MathUtils } from 'three';
import { Stars } from '@react-three/drei';

interface ParticlesProps {
  count: number;
  mousePosition: { x: number; y: number };
}

const Particles: React.FC<ParticlesProps> = ({ count, mousePosition }) => {
  const mesh = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    // Rotate slowly
    mesh.current.rotation.x = MathUtils.lerp(
      mesh.current.rotation.x,
      mousePosition.y * 0.05,
      0.1
    );
    mesh.current.rotation.y = MathUtils.lerp(
      mesh.current.rotation.y,
      mousePosition.x * 0.05,
      0.1
    );
    
    // Pulse effect
    const time = state.clock.getElapsedTime();
    mesh.current.scale.x = MathUtils.lerp(
      mesh.current.scale.x,
      1 + Math.sin(time * 0.3) * 0.05,
      0.1
    );
    mesh.current.scale.y = MathUtils.lerp(
      mesh.current.scale.y,
      1 + Math.sin(time * 0.3) * 0.05,
      0.1
    );
    mesh.current.scale.z = MathUtils.lerp(
      mesh.current.scale.z,
      1 + Math.sin(time * 0.3) * 0.05,
      0.1
    );
  });

  // Create random particle positions
  const particlePositions = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#3b82f6" 
        transparent 
        opacity={0.6}
        sizeAttenuation 
      />
    </points>
  );
};

const GridLines: React.FC<{ mousePosition: { x: number; y: number } }> = ({ mousePosition }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!mesh.current) return;
    
    // Subtle movement based on mouse
    mesh.current.rotation.x = MathUtils.lerp(
      mesh.current.rotation.x,
      mousePosition.y * 0.02,
      0.1
    );
    mesh.current.rotation.y = MathUtils.lerp(
      mesh.current.rotation.y,
      mousePosition.x * 0.02,
      0.1
    );
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[40, 40, 20, 20]} />
      <meshBasicMaterial 
        color="#3b82f6" 
        wireframe 
        transparent 
        opacity={0.15} 
      />
    </mesh>
  );
};

const ThreeBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Update mouse position for parallax effect
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -0.5 to 0.5
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <Particles count={750} mousePosition={mousePosition} />
        <GridLines mousePosition={mousePosition} />
        <Stars radius={50} depth={50} count={1000} factor={4} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;