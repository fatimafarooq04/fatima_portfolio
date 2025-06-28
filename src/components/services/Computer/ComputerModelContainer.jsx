import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { ComputerModel } from './ComputerModel'

const ComputerModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="sunset" intensity={0.5}>
                    <ComputerModel />

                </Stage>
                <OrbitControls enableZoom={false} autoRotate />

                <PerspectiveCamera position={[-4, 2, 2.5]} zoom={0.8} makeDefault />
            </Suspense>
        </Canvas>
    )
}

export default ComputerModelContainer