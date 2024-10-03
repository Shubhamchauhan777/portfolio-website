'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'
import { Suspense, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BufferGeometry, Material, Points as ThreePoints } from 'three'

// Define a more specific interface for StarField props
interface StarFieldProps {
  color?: string;
  size?: number;
  radius?: number;
  count?: number;
  fade?: boolean;
  speed?: number;
}

function StarField({
  color = '#ffffff',
  size = 0.002,
  radius = 1.5,
  count = 5000,
  speed = 1,
}: StarFieldProps) {
  const ref = useRef<ThreePoints<BufferGeometry, Material | Material[]>>(null!)
  
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(count), { radius }) as Float32Array
  )

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / (10 / speed)
      ref.current.rotation.y -= delta / (15 / speed)
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function Hero() {
  const handleExploreMyWorkClick = () => {
    const projectSection = document.getElementById('projects'); // Ensure this ID matches the Projects.tsx section
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the project section
    } else {
      console.error('Project section not found'); // Log error if section is not found
    }
  };

  return (
    <section className="h-screen relative overflow-hidden bg-black"> 
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <StarField />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" /> 
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" // Updated gradient colors for better contrast
        >
          Shubham Chauhan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300" // Updated text color for better visibility on black
        >
          Web Developer & 3D Enthusiast | Creating immersive digital experiences
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExploreMyWorkClick} // Update button to use the new handler
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500 transition-all duration-300" // Updated button colors for a professional look
        >
          Explore My Work
        </motion.button>
      </div>
    </section>
  )
}