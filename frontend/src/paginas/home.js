import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Cards from '../componentes/Cards/Cards'
import Footer from '../componentes/Footer/Footer'
import Whats from '../componentes/Whatsapp/Whats'
import Reserva from '../componentes/Reserva/Reserva'
import Carrossel from '../paginas/Carousel'
import './style.css'
import Login from '../paginas/login';



function Home() {
  return (
    
    

<div className='background' fluid>
      <Cabecalho/>

      
      <Carrossel/>
      <Whats/>
    <Reserva/>
       <Footer/>

    </div>

    

      )
      };

export default Home;

