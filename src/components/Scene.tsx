'use client'

import {Canvas, useThree} from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './model'
import { OrbitControls } from '@react-three/drei'


export default function Scene() {
    return (
        <Canvas className="relative rounded-lg object-cover shadow-xl w-full h-full" >
            <ambientLight intensity={0.4} />
            <directionalLight position={[-5, -5, 5]} intensity={2} />
            <hemisphereLight
                intensity={0.6}
                color="orange"  
            />


            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    )
}