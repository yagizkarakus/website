import React from 'react'
import styled from 'styled-components'
import Map from './Map';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: lightgray;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  
  
`;

const Button = styled.button`
  background-color: #0BEE40;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`;


const Right = styled.div`
  flex: 1;
`;

const handleSubmit =e=>{
  e.preventDefault()
}

function Contact() {
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder='Name'></Input>
            <Input placeholder='Email'></Input>
            <TextArea placeholder='Write your message' rows={10}></TextArea>
            <Button type='submit'>Send</Button>

          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact