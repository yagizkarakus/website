import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Eye from '../../models/Eye'

function ComputerVision() {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Eye/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default ComputerVision