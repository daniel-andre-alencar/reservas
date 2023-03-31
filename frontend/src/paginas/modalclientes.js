import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css'


function Clientesmodal() {
  
  const { id } = useParams();
  const [cliente, setFormData] = useState([]);
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {
        
        console.log('id =' + id);
        const response = await axios.get(`http://localhost:5000/clientes/${id}`);
        setFormData(response.data);      
        console.log('response ' + response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 
  
  return (    
    <Container  fluid>

        <Cabecalho />

        <Card>
      <Card.Body>
      <Row>
      <Col>
        <Form className='form2'>
        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>CPF:</Form.Label>
          <Col sm={6}>
          <Form.Control type="text" placeholder="" name='cpf' value={cliente.cpf}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>NOME:</Form.Label>
          <Col sm={6}>
          <Form.Control type="text" placeholder="" name='nome' value={cliente.nome}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>CEP:</Form.Label>
          <Col sm={6}>
          <Form.Control type="text" placeholder="" name='cep' value={cliente.cep}/>
          </Col>
        </Form.Group>      
        <Form.Group as={Row} className="me-2" controlId="formBasicCheckbox">
    
        <br></br>
        </Form.Group>
        <Button variant="dark" name='salvar' size='lg' type="submit">
          SALVAR
        </Button>
      </Form>
      </Col>
      </Row>
      </Card.Body>
      </Card>
      <Footer/>
    </Container>
  );
}

export default Clientesmodal;