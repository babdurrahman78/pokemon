import React, { useContext }  from "react";
import Query from "../../components/Query";
import POKEMON from "../../queries/pokemon";
import { MyPokemonContext } from "../../components/PokemonContext";


const Pokemon_Detail = () => {
  let url           = window.location.href;
  let url_split     = url.split("/");
  let pokemon_name  = url_split[4];

  const [state, dispatch] = useContext(MyPokemonContext);

  const catchPokemon = (name, image) => {
    // const randomNumber = Math.random();
    // if(randomNumber < 0.5){ 
        // prompt(pokemon_name+" berhasil ditangkap\nMasukan nickname")
        dispatch({
          type: "ADD_POKEMON",
          payload: {
            name,
            image,
          },
        })
    // }
    // else{
    //   alert(pokemon_name+ " Gagal ditangkap, coba lagi");
    // }
  };
  
  return (
    <div class="container px-5">
      <Query query={POKEMON} name={pokemon_name}>
        {({ data: { pokemon } }) => {
          return (
            <div>
              <div className="card-body text-center">
                <h1 class="card-title">{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
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
                    <div className="card-body">
                      {pokemon.types.map((type)=>{
                        return(
                          <p className="card-text">{type.type.name}</p> 
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>  

              <div className="row mt-5">
                <button type="button" 
                  class="btn btn-success" 
                  onClick={() => catchPokemon(pokemon.name, pokemon.sprites.front_default)}
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

export default Pokemon_Detail;