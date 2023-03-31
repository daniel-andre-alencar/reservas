import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../imgs/coroa.png'
import './style.css'

function cabecalho() {
  return (
  
    <nav class="navbar navbar-expand-lg bg-light">
      <img src={Logo} className='Logo'/>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">DG RESERVAS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">CONTATOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="login">LOGIN</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
         
        <a class="btn btn-outline-success" href='/index' type="submit">INTRANET</a>
        </form>
      </div>
    </div>
  </nav>
  );
}

export default cabecalho;