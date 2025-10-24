// SkillTag.tsx
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// Define the type for the props
type SkillTagProps = {
  position: [number, number, number];
  skill: string;
};

const ThreeDSkillTag = ({ position, skill }: SkillTagProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const initialRotation = useRef(Math.random() * 2 * Math.PI);

  // The useFrame hook runs every frame, perfect for animation
  useFrame((state) => {
    if (ref.current) {
      // Base slow rotation for constant movement
      ref.current.rotation.x = ref.current.rotation.y += 0.005;

      // Subtle scaling and color change on hover
      const scaleTarget = hovered ? 1.5 : 1;
      ref.current.scale.lerp(new THREE.Vector3(scaleTarget, scaleTarget, scaleTarget), 0.1);

      // Make the text face the camera slightly (lookAt)
      ref.current.lookAt(state.camera.position);
    }
  });

  return (
    <mesh 
      ref={ref} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      rotation={[0, initialRotation.current, 0]}
    >
      {/* The Text component from drei is complex but great for performance.
        font: Specify a font file path if you want custom fonts.
      */}
      <Text 
        fontSize={0.25} 
        color={hovered ? '#4ADE80' : 'white'} // Tailwind 'teal-400' on hover
        anchorX="center" 
        anchorY="middle"
        // Adjust the material to handle lighting better
        material-toneMapped={false} 
      >
        {skill}
      </Text>
    </mesh>
  );
};

export default ThreeDSkillTag;