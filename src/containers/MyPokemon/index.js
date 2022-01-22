import React, {useContext} from "react";

import { MyPokemonContext } from "../../components/PokemonContext";


const MyPokemon = () => {
	const [state,dispatch] = useContext(MyPokemonContext);

	return (
		<div>
        {state && state.pokemons.map((pokemon) => (
			<div>
				<p>{pokemon.name}</p>
		  		<img src={pokemon.image} alt={pokemon.name}/>
			</div>
        ))}
      </div>
    );
  };

export default MyPokemon;