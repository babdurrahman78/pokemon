import React, { useState, useContext } from "react";
import Query from "../../components/Query";
import POKEMONS from "../../queries/pokemons";
import { Link } from "react-router-dom";
import { MyPokemonContext } from "../../components/PokemonContext";

const Pokemon_List = () => {
  const [offset, setOffset] = useState(0);
  //let limit = 4;

  return (
    <div className="container px-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bolder">List Pokemons</h1>
      </div>
      <Query query={POKEMONS} limit={20} offset={offset}>
        {({ data: { pokemons } }) => {
          return (
            <div className="row gx-5 content-center">
              {pokemons.results.map((pokemon) => {
                return (
                  <div key={pokemon.name} className="col-xl-4 mb-5">
                    <Link
                      to={`/pokemon/${pokemon.name}`}
                      className="text-reset text-decoration-none"
                    >
                      <div className="card mb-5 mb-xl-0">
                        <div className="card-body p-5">
                          <div className="mb-3 text-center">
                            <span className="fw-bolder">
                              <img src={pokemon.image} alt={pokemon.name} />
                            </span>
                          </div>
                          <div className="text-center">
                            <span>{pokemon.name}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        }}
      </Query>
      <button
        onClick={() => {
          setOffset(offset + 20);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pokemon_List;
