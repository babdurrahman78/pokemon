import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../asset/logo1.png";

const Navig = () => {
  return (

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark px-3">
      <a class="navbar-brand" href="/">Home</a>
      <div class="ml-auto">
        <a class="navbar-brand d-sm-none" href="/mypokemon">My Pokemon</a>
      </div>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <a class="navbar-brand d-none d-sm-block" href="/mypokemon">My Pokemon</a>
      </div>

    </nav>
    );
  };

export default Navig;