import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Camera from '../../models/Camera'

function ImageProcess() {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Camera/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default ImageProcess