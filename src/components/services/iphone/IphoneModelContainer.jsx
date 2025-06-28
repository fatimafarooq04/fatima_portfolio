import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { IphoneModel } from './IphoneModel'


const IphoneModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="sunset" intensity={0.2}>

            <IphoneModel/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate  />
                <PerspectiveCamera position={[1,-0.6,2.5]} zoom={0.9} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default IphoneModelContainer