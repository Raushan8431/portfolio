import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  Line,
} from "@react-three/drei";
import * as THREE from "three";

/* ============================================================
   TYPES
============================================================ */

interface NodeData {
  id: number;
  position: THREE.Vector3;
}

/* ============================================================
   RANDOM NODE GENERATOR
============================================================ */

function createNodes(count: number) {
  const nodes: NodeData[] = [];

  for (let i = 0; i < count; i++) {
    nodes.push({
      id: i,
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 7
      ),
    });
  }

  return nodes;
}

/* ============================================================
   NEURAL NODE
============================================================ */

function NeuralNode({
  position,
}: {
  position: THREE.Vector3;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += 0.01;

    mesh.current.scale.setScalar(
      1 + Math.sin(state.clock.elapsedTime * 2 + position.x) * 0.08
    );
  });

  return (
    <Sphere ref={mesh} args={[0.08, 32, 32]} position={position}>
      <meshStandardMaterial
        color="#5EEAD4"
        emissive="#22D3EE"
        emissiveIntensity={2}
        metalness={0.4}
        roughness={0.1}
      />
    </Sphere>
  );
}

/* ============================================================
   CONNECTION LINES
============================================================ */

function Connections({
  nodes,
}: {
  nodes: NodeData[];
}) {
  const connections = useMemo(() => {
    const list: JSX.Element[] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].position.distanceTo(nodes[j].position);

        if (d < 2.0) {
          list.push(
            <Line
              key={`${i}-${j}`}
              points={[
                nodes[i].position,
                nodes[j].position,
              ]}
              color="#4F46E5"
              lineWidth={1}
              transparent
              opacity={0.35}
            />
          );
        }
      }
    }

    return list;
  }, [nodes]);

  return <>{connections}</>;
}

/* ============================================================
   MAIN NETWORK
============================================================ */

function Network() {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => createNodes(45), []);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.08;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <group ref={group}>
      <Connections nodes={nodes} />

      {nodes.map((node) => (
        <NeuralNode
          key={node.id}
          position={node.position}
        />
      ))}
    </group>
  );
}

/* ============================================================
   LIGHTS
============================================================ */

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <pointLight
        position={[4, 4, 4]}
        intensity={25}
        color="#22D3EE"
      />

      <pointLight
        position={[-4, 3, 2]}
        intensity={18}
        color="#7C3AED"
      />

      <pointLight
        position={[0, -4, 0]}
        intensity={12}
        color="#3B82F6"
      />
    </>
  );
}

/* ============================================================
   EXPORT
============================================================ */

export default function NeuralNetwork3D() {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 9]}
          fov={45}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />

        <SceneLights />

        <Network />
      </Canvas>
    </div>
  );
}
