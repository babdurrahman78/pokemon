import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../asset/logo1.png";

const Navig = () => {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between px-5">
        <Navbar.Brand>
          <a href="/">
            <img
              class="img"
              src={logo}
            />
          </a>
        </Navbar.Brand>

      <Nav.Link className="text-reset" href="/mypokemon">My Pokemon</Nav.Link>
    </nav>
    );
  };

export default Navig;