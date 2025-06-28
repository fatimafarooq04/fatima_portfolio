import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

const Shape = () => {
    return (
      
        <Canvas>
            <Suspense fallback='loading....'>
            <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#DB8B9B"
                    attach="material"
                    distort={0.5}
                    speed={2}
                />
            </Sphere>
            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 3]} />
            </Suspense>
       </Canvas>
    

    )
}

export default Shape