import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Mouth from '../../models/Mouth'
import React from 'react'


function NLP() {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Mouth/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default NLP