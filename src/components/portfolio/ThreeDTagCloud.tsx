"use client";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
// IMPORTANT: Updated to an explicit relative import to ensure correct component loading
import ThreeDSkillTag from './ThreeDSkillTag';

type TagCloudProps = {
  skills: string[];
  radius?: number;
};

// Generates points on a sphere using the Fibonacci method for even distribution
const fibonacciSphere = (numPoints: number, radius: number) => {
  const points = [];
  const phi = Math.PI * (3. - Math.sqrt(5.)); // Golden angle increment

  for (let i = 0; i < numPoints; i++) {
    const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
};


const ThreeDTagCloud = ({ skills, radius = 4 }: TagCloudProps) => {
  const groupRef = useRef<THREE.Group>(null!);
  
  // Calculate positions once when the component mounts
  const positions = useRef(fibonacciSphere(skills.length, radius)).current;

  // Rotate the entire group slowly
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <ThreeDSkillTag 
          key={skill} 
          skill={skill} 
          // Cast the position array to the required format
          position={positions[index] as [number, number, number]} 
        />
      ))}
    </group>
  );
};

export default ThreeDTagCloud;