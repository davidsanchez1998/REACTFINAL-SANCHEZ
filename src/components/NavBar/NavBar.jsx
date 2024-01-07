import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

//Creamos la barra de navegación con los Links para las distintas rutas. Al final del navBar llamamos al componente CartWidget
export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar opacity-10">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
          </NavLink>

          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="menuBurger"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <b>
              <ul className="navbar-nav">
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/"
                  >
                     Home
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/flores"
                  >
                    Flores
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/aceites"
                  >
                    Aceites
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/papeles y filtros"
                  >
                    Papeles y Filtros
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/otros"
                  >

                    Otros
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/otros"
                  >
                  </NavLink>
                </li>
              </ul>
            </b>
          </div>
          <div className="ml-auto d-flex align-items-rigth ">
            <NavLink className="nav-link text-dark" to="/cart">
              <CartWidget />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
