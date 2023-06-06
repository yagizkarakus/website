import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;

const Container = styled.div`
    height: 100%;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: 74px;
`;

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 20px;
`;

const Subtitle = styled.h2`
    color: #0BEE40;
    padding-left: 5px;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    background-color: #0BEE40;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Right = styled.div`
flex: 3;
position: relative;
`;

const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(30px);
    }
}
`;

function Hero() {
    return (
        <Section>
            <Navbar/> 
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatIDo>
                        <Line src='./img/line.png' />
                        <Subtitle>What I Do</Subtitle>
                    </WhatIDo>
                    <Desc>I enjoy creating delightful Artifical Intelligence ptojects</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Sphere args={[1,100,200]} scale={2.4}>
                            <MeshDistortMaterial
                                color="#540c5e"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <Img src="./img/scientist.png" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero