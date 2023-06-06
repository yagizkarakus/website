import React, { useState } from 'react'
import styled from 'styled-components'
import ComputerVision from './WorkModels/ComputerVision';
import DeepLearning from './WorkModels/DeepLearning';
import ImageProcess from './WorkModels/ImageProcess';
import MachineLearning from './WorkModels/MachineLearning';
import NLP from './WorkModels/NLP';
const data = [
  "Machine Learning",
  "Image Processing",
  "Computer Vision",
  "Deep Learning",
  "N.L.P",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
`;
const Left = styled.div`
flex: 2;
display: flex;
align-items: center;

`;
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;
const ListItem = styled.li`
font-size: 70px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;
::after{
  content: "${(props)=>props.text}";
  position: absolute;
  top:0;
  left: 0;
  color: #0BEE40;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
}
&:hover{
  ::after{
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to{
        width: 100%;
      }
    }
  }
}

`;
const Right = styled.div`
flex: 1;
`;

function Works() {
  const [work, setWork] = useState("Machine Learning")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) =>(
              <ListItem key = {item} text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}

            
          </List>
        </Left>
        <Right>
              {
              work == "Machine Learning" ? (
                <MachineLearning/>
              ):
              work === "Image Processing" ? (
                <ImageProcess/>
              ):
              work == "Computer Vision" ? (
                <ComputerVision/>
              ):
              work == "Deep Learning" ? (
                <DeepLearning/>
              ):
              (
                <NLP/>
              )
              }
        </Right>
      </Container>
    </Section>
  )
}

export default Works