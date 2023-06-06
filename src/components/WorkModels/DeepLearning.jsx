import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Neuron from '../../models/Neuron'

function DeepLearning() {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Neuron/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default DeepLearning