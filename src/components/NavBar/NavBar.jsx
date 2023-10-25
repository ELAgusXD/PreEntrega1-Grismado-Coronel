import React from 'react';
 // Crearemos este archivo en el siguiente paso
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Añade las clases de Bootstrap */}
      <div className="container"> {/* Agrega la clase "container" de Bootstrap */}
        <a className="navbar-brand" href="#">Notebooks</a> {/* Usa la clase "navbar-brand" para el logo */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Usa la clase "navbar-nav" y "ml-auto" para el menú */}
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a> {/* Usa la clase "nav-link" para los enlaces */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><CartWidget /> 0</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
