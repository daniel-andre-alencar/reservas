import React from 'react';
import {
  Anchor,
  Image,
  Container
} from 'react-bootstrap';
import './style.css'

function funcao1()
{
alert("Eu sou um alert!");
}

function Whats() {
  return (
    <Container className='Whats'>  
       <Anchor href='https://web.whatsapp.com/,'><Image className='WhatsLogo' src='https://cdn-icons-png.flaticon.com/512/3536/3536445.png'/></Anchor>
       
       
        
    </Container>
  );


}

export default Whats;