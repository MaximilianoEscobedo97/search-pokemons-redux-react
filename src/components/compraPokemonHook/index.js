import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { buy_pokemon_action, return_pokemon_action } from "../../redux/actions/gameShpActoin";

const CompraPokemonHook = () => {
    
    const dispatch = useDispatch();

    const handleClickBuyPokemon = () =>{
       dispatch(buy_pokemon_action(1));
    }

    const handleClickReturnPokemon = () =>{
        dispatch(return_pokemon_action(1));
    }

    
    return (

        <div>
             <button className="btn btn-dark btn-sm mb-2" onClick={handleClickBuyPokemon}>Comprar Pokemon</button>
            <button className="btn btn-dark btn-sm " onClick={handleClickReturnPokemon}>Regresar Pokemon</button>
        </div>

    )
}

export default CompraPokemonHook;