import React from "react";
import Query from "../../components/Query";
import POKEMONS from "../../queries/pokemons";
import { Link } from "react-router-dom";

const Pokemon_List = () => {
	//let limit = 4;
	return (
  		<div className="container px-5 mt-5">
  			<div className="text-center mb-5">
  				<h1 className="fw-bolder">List Pokemons</h1>
  			</div>
            <Query query={POKEMONS}>
            	{({ data: { pokemons } }) => {
            		return (
                    	<div className="row gx-5 content-center">
                    		{pokemons.results.map((pokemon) => {
	                    		return (
	                    			<div className="col-xl-4 mb-5">
		                              	<Link to={`/pokemon/${pokemon.name}`} 
		                              		className="text-reset text-decoration-none">
		                          			<div className="card mb-5 mb-xl-0">
		                            			<div className="card-body p-5">
		                              				<div className="mb-3 text-center">
		                                				<span className="fw-bolder">
		                                					<img src={pokemon.image}/>
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
  
         </div>
    );
  };

export default Pokemon_List;