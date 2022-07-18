import React from "react";
import { connect } from "react-redux/es/exports";
import {buy_pokemon_action, return_pokemon_action} from "../../redux/actions/gameShpActoin"
function CompraPokemon (props) {

    const handleClickBuyPokemon = () =>{
        props.buy_pokemon_action(1);
    }

    const handleClickReturnPokemon = () =>{
        props.return_pokemon_action(1);
    }

    return(
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={handleClickBuyPokemon}>Comprar Pokemon</button>
            <button className="btn btn-dark btn-sm " onClick={handleClickReturnPokemon}>Regresar Pokemon</button>
        </div>
    )
        
}

const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
}

export default connect(null,mapDispatchToProps)(CompraPokemon)