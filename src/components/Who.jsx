import React from 'react'
import styled from 'styled-components'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Brain from '../models/Brain'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  `;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;

`;

const Title = styled.h1`
    font-size: 74px;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
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
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


function Who() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas>
          <Stage environment="city" intensity={0.6}>
              <Brain/>
          </Stage>
          <OrbitControls enableZoom={false}/>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatIDo>
            <Line src='./img/line.png' />
            <Subtitle>What am I</Subtitle>
          </WhatIDo>
          <Desc>TEDU computer Science Student and A.I enthusiast</Desc>
          <Button>See my works</Button>

        </Right>
      </Container>
    </Section>
  )
}

export default Who