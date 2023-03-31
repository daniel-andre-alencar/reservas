import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import  FUNC from '../imgs/funcionario.jpg';
import  Client from '../imgs/cliente.png';
import  user from '../imgs/user.jpg';
import  sal from '../imgs/saladeluxo.jpg';
import { Link } from 'react-router-dom';
import './style.css';




function Indexx() {
  return (
    
    

<div className='background' fluid>
      <Cabecalho/>

     
    <div>
  <Link to={"/funcionarios"}><img src={FUNC}className='GAT'/></Link>
      
  <Link to={"/clientes"}><img src={Client}className='GATO'/></Link>
  </div>
  <Row>
    <br></br>
  </Row>
<div>
  <Link to={""}><img src={user}className='Func'/></Link>

  <Link to={"/salas"}><img src={sal}className='GATA'/></Link>
  </div>
   <Footer/>
     
       

    </div>

    

      )
      };

export default Indexx;

