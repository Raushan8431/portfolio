import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Enhanced Monitor Component with Multi-Color Code Display
const Monitor = () => {
  const monitorRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (monitorRef.current) {
      monitorRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    
    // Animate screen glow with color cycling
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      const time = state.clock.elapsedTime;
      material.emissiveIntensity = 0.4 + Math.sin(time * 2) * 0.1;
      
      // Cycle through colors
      const hue = (time * 0.1) % 1;
      const color = new THREE.Color().setHSL(hue, 0.8, 0.3);
      material.emissive = color;
    }
  });

  // Create more realistic code lines with rainbow colors
  const codeLines = useMemo(() => {
    const lines = [];
    const codePatterns = [
      { width: 2.8, color: "#00d4ff", text: "function hackTheSystem() {" },
      { width: 3.2, color: "#ff0080", text: "  const security = new Shield();" },
      { width: 2.4, color: "#8b5cf6", text: "  if (threat.detected) {" },
      { width: 3.0, color: "#00ff88", text: "    neutralize(threat);" },
      { width: 1.8, color: "#ffaa00", text: "  }" },
      { width: 2.6, color: "#f97316", text: "  return secure;" },
      { width: 1.2, color: "#14b8a6", text: "}" },
      { width: 3.4, color: "#a78bfa", text: "// Cybersecurity Expert Mode" },
      { width: 2.2, color: "#2dd4bf", text: "const skills = [" },
      { width: 2.8, color: "#fb923c", text: "  'Penetration Testing'," },
      { width: 2.4, color: "#33ffaa", text: "  'Full Stack Dev'," },
      { width: 2.0, color: "#ff6699", text: "  'Cloud Security'" },
      { width: 1.4, color: "#33ddff", text: "];" }
    ];

    codePatterns.forEach((pattern, i) => {
      lines.push({
        position: [-1.9, 1.0 - i * 0.15, 0.17] as [number, number, number],
        width: pattern.width,
        color: pattern.color,
        emissiveIntensity: 0.6 + Math.sin(i * 0.5) * 0.2
      });
    });

    return lines;
  }, []);

  return (
    <group ref={monitorRef}>
      {/* Monitor Base - Enhanced with gradient colors */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.9, 1.1, 0.4, 12]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#00d4ff"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Monitor Stand */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 1.4, 8]} />
        <meshStandardMaterial 
          color="#2a2a3e" 
          metalness={0.7} 
          roughness={0.3}
          emissive="#ff0080"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Monitor Screen Frame */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[5.0, 3.2, 0.4]} />
        <meshStandardMaterial 
          color="#0a0a0f" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#8b5cf6"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Monitor Screen Background - Multi-color glow */}
      <mesh ref={screenRef} position={[0, 0.5, 0.21]}>
        <boxGeometry args={[4.6, 2.8, 0.02]} />
        <meshStandardMaterial 
          color="#001122" 
          emissive="#002244" 
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Enhanced Code Lines with Rainbow Colors */}
      {codeLines.map((line, i) => (
        <mesh key={i} position={line.position}>
          <boxGeometry args={[line.width, 0.08, 0.01]} />
          <meshStandardMaterial 
            color={line.color}
            emissive={line.color}
            emissiveIntensity={line.emissiveIntensity}
          />
        </mesh>
      ))}
      
      {/* Terminal Cursor - Animated with color cycling */}
      <mesh position={[1.8, -0.2, 0.18]}>
        <boxGeometry args={[0.06, 0.1, 0.01]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#00ff88" 
          emissiveIntensity={0.8}
        />
      </mesh>
      
      {/* Terminal Header Bar - Gradient effect */}
      <mesh position={[0, 1.3, 0.18]}>
        <boxGeometry args={[4.4, 0.15, 0.01]} />
        <meshStandardMaterial 
          color="#2d3748" 
          emissive="#00d4ff" 
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Terminal Control Buttons - Multi-color */}
      {[
        { x: -1.8, color: "#ff3366" },
        { x: -1.6, color: "#ffaa00" },
        { x: -1.4, color: "#00ff88" }
      ].map((button, i) => (
        <mesh key={i} position={[button.x, 1.3, 0.19]}>
          <cylinderGeometry args={[0.04, 0.04, 0.01, 8]} />
          <meshStandardMaterial 
            color={button.color}
            emissive={button.color}
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
      
      {/* Side Indicators/Ports - Multi-color */}
      <mesh position={[2.3, 0.5, 0.1]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#00ff88" 
          emissiveIntensity={0.6}
        />
      </mesh>
      
      <mesh position={[2.3, 0, 0.1]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial 
          color="#ff0080" 
          emissive="#ff0080" 
          emissiveIntensity={0.4}
        />
      </mesh>

      <mesh position={[2.3, -0.5, 0.1]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#8b5cf6" 
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

// Enhanced Keyboard Component with RGB lighting
const Keyboard = () => {
  const keyboardRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (keyboardRef.current) {
      keyboardRef.current.position.y = -1.8 + Math.sin(state.clock.elapsedTime * 1.5) * 0.01;
    }
  });

  // RGB keyboard layout
  const keys = useMemo(() => {
    const keyArray = [];
    const colors = ['#00d4ff', '#ff0080', '#8b5cf6', '#00ff88', '#ffaa00', '#f97316'];
    
    for (let row = 0; row < 4; row++) {
      const keysInRow = row === 0 ? 10 : row === 1 ? 10 : row === 2 ? 9 : 7;
      for (let col = 0; col < keysInRow; col++) {
        keyArray.push({
          position: [
            -2.0 + col * 0.4 + (row > 0 ? 0.2 : 0),
            0.1,
            -0.6 + row * 0.4
          ] as [number, number, number],
          isHighlighted: Math.random() > 0.7,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: row === 3 && col > 4 ? [1.2, 0.12, 0.25] : [0.3, 0.12, 0.25]
        });
      }
    }
    return keyArray;
  }, []);

  return (
    <group ref={keyboardRef} position={[0, -1.8, 1.5]}>
      {/* Keyboard Base - RGB underglow */}
      <mesh>
        <boxGeometry args={[5.2, 0.25, 2.2]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.6} 
          roughness={0.4}
          emissive="#00d4ff"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Keys with RGB lighting */}
      {keys.map((key, index) => (
        <mesh key={index} position={key.position}>
          <boxGeometry args={key.size} />
          <meshStandardMaterial 
            color={key.isHighlighted ? key.color : "#2a2a3e"} 
            emissive={key.isHighlighted ? key.color : "#000000"}
            emissiveIntensity={key.isHighlighted ? 0.4 : 0}
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

// Enhanced Mouse Component with RGB
const Mouse = () => {
  const mouseRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mouseRef.current) {
      mouseRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.03;
    }
  });

  return (
    <group position={[3, -1.6, 0.5]}>
      <mesh ref={mouseRef}>
        <boxGeometry args={[0.8, 0.3, 1.2]} />
        <meshStandardMaterial 
          color="#2a2a3e" 
          metalness={0.7} 
          roughness={0.3}
          emissive="#ff0080"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Mouse buttons */}
      <mesh position={[-0.15, 0.16, 0.2]}>
        <boxGeometry args={[0.25, 0.05, 0.4]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          emissive="#00d4ff"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0.15, 0.16, 0.2]}>
        <boxGeometry args={[0.25, 0.05, 0.4]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* RGB Scroll wheel */}
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 8]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#00ff88" 
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
};

// Enhanced Floating Particles with multiple colors
const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { particlePositions, particleColors } = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    const colors = new Float32Array(100 * 3);
    const colorPalette = [
      [0, 0.83, 1],      // #00d4ff
      [1, 0, 0.5],       // #ff0080
      [0.55, 0.36, 0.96], // #8b5cf6
      [0, 1, 0.53],      // #00ff88
      [1, 0.67, 0],      // #ffaa00
      [0.98, 0.45, 0.09] // #f97316
    ];
    
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }
    return { particlePositions: positions, particleColors: colors };
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={100}
          array={particlePositions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={100}
          array={particleColors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        transparent 
        opacity={0.8}
        vertexColors
      />
    </points>
  );
};

// Main Computer3D Component - Enhanced with RGB Lighting
const Computer3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows={false}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[5, 2, 8]} fov={50} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.3}
        />
        
        {/* Enhanced RGB Lighting Setup */}
        <ambientLight intensity={0.3} />
        
        {/* Main directional light */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2}
          color="#ffffff"
        />
        
        {/* RGB Key lights */}
        <spotLight 
          position={[0, 8, 8]} 
          intensity={2.0}
          angle={Math.PI / 6}
          penumbra={0.3}
          color="#00d4ff"
        />
        
        {/* Multi-color fill lights */}
        <pointLight position={[-8, 4, 4]} intensity={1.0} color="#ff0080" />
        <pointLight position={[8, 4, 4]} intensity={1.0} color="#8b5cf6" />
        <pointLight position={[0, 4, -8]} intensity={0.8} color="#00ff88" />
        <pointLight position={[4, 2, 4]} intensity={0.6} color="#ffaa00" />
        <pointLight position={[-4, 2, 4]} intensity={0.6} color="#f97316" />
        
        {/* Screen glow light - cycling colors */}
        <pointLight position={[0, 0.5, 2]} intensity={1.5} color="#00d4ff" />
        
        {/* Computer Components */}
        <Monitor />
        <Keyboard />
        <Mouse />
        <FloatingParticles />
        
        {/* Enhanced Ground plane with RGB reflection */}
        <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial 
            color="#001122" 
            transparent 
            opacity={0.3}
            roughness={0.1}
            metalness={0.8}
            emissive="#00d4ff"
            emissiveIntensity={0.05}
          />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Computer3D;