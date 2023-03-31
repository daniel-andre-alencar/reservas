import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Clientes from './paginas/clientes';
import Funcionarios from './paginas/funcionarios';
import Home from './paginas/home';
import Salas from './paginas/salas';
import Login from './paginas/login';
import Salascarrossel from './paginas/salascarrossel';
import Index from './paginas/index';
import Funcmodal from './paginas/modalfuncionarios';
import Clienmodal from './paginas/modalclientes';

function App() {
  return (
    
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/funcionarios" element={<Funcionarios/>} />
          <Route path="/salas" element={<Salas/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/salas/:id" element={<Salascarrossel/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/funcmodal/:id" element={<Funcmodal/>} />
          <Route path="/clientemodal/:id" element={<Clienmodal/>} />

        </Routes>
      </BrowserRouter>   
   
  

  );
}

export default App;
