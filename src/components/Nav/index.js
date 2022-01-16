import React from "react";

const Navig = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light px-3">
      <a className="navbar-brand" href="/">Home</a>
      <div className="ml-auto">
        <a className="navbar-brand d-sm-none" href="/mypokemon">My Pokemon</a>
      </div>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <a className="navbar-brand d-none d-sm-block" href="/mypokemon">My Pokemon</a>
      </div>

    </nav>
    );
  };

export default Navig;