import React, { useState, useContext } from 'react'
import Query from "../../components/Query";
import { MyPokemonContext } from "../../components/PokemonContext";
import POKEMON from "../../queries/pokemon";

const Coba = () => {
  let url           = window.location.href;
  let url_split     = url.split("/");
  let pokemon_name  = url_split[4];
  //console.log(pokemon_name)
  const [state, dispatch] = useContext(MyPokemonContext);

  const catchPokemon = () => {
    const randomNumber = Math.random();
    if(randomNumber < 0.5){ 
      return (
        prompt(pokemon_name+" berhasil ditangkap\nMasukan nickname")
      )
    }
    else{
      alert(pokemon_name+ " Gagal ditangkap, coba lagi");
    }
  };
  
  return (
    <div class="container px-5">
      <Query query={POKEMON} name={pokemon_name}>
        {({ data: { pokemon } }) => {
          return (
            <div>
              <div className="card-body text-center">
                <h1 class="card-title">{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default}/>
              </div>
              
              <div className="row">
                <div className="col-md-8 scroll mb-3">
                  <div class="card">
                    <h5 className="card-header">Type's {pokemon.name}</h5>
                    <div class="card-body">
                      {pokemon.moves.map((move)=>{
                        return(
                          <span class="card-text">{move.move.name}, </span> 
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div class="card">
                    <h5 className="card-header">Move's {pokemon.name}</h5>
                    <div class="card-body">
                      {pokemon.types.map((type)=>{
                        return(
                          <p class="card-text">{type.type.name}</p> 
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>  

              <div className="row mt-5">
                <button type="button" 
                  class="btn btn-success" 
                  onClick={event => {
                    let nickname = catchPokemon();
                    if(nickname){
                      const newPokemon = {
                        nickname: nickname,
                        name : pokemon.name,
                        image : pokemon.sprites.front_default,
                      };
                      dispatch({
                        type: "ADD_POKEMON",
                        payload: newPokemon,
                      });
                    alert("Pokemon berhasil ditambahkan ke [My Pokemon]");
                    }
                  }}
                >Catch
                </button>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Coba;