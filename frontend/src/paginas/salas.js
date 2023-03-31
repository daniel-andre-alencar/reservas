import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Image, Table } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Salas() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        
        const response = await axios.get('http://localhost:5000/salas');
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[]); 
    
    async function handleDelete(id) {
      try {
             await axios.delete(`http://localhost:5000/salas/${id}`);
            alert('deletado com sucesso!');
      } catch (error) {
        console.error(error);
      }      
    }
  
  return (    

    <Container fluid>
      <Row>
        
        <Cabecalho />
        
      </Row>
     
      <Row>
        
                <div className="table-container">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>Salas</h2>
                    </div>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Numero</th>
                                <th>capacidade</th>
                                <th>valor</th>
                                <th>nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toggle="tooltip" title={row.cep}>
                                <td>{row.numero}</td>
                                <td>{row.capacidade}</td>
                                <td>{row.valor}</td>
                                <td>{row.nome}</td>
                                <td>
                                  <Link to={`/salas/${row._id}`} >
                                    <Image
                                          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                                          alt="editar"
                                          className="rounded-circle"
                                          width="30"
                                          height="30"
                                    />
                                  </Link>
                                </td>
                                <td>
                                    <Image 
                                      src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                      alt="apagar"
                                      className="rounded-circle"
                                      width="30"
                                      height="30"
                                      onClick={() =>handleDelete(row._id)}
                                    />
                                </td>
                            </tr>
                            );
                            })}
                        </tbody>
                    </Table>
                </div>

      </Row>        
      
        <Row>
        <Footer/>
          <Link to="/salas/:id">
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              alt="Incluir"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </Button>
          </Link>
        </Row>    

    </Container>
  );
}

export default Salas;