import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Robot from '../../models/Robot'

function MachineLearning() {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Robot scale={5}/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default MachineLearning