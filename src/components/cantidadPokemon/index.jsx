import React from "react";
import { connect, Connect } from "react-redux/es/exports";

function CantidadPokemon({game_shop}) {
    return (
        <React.Fragment>
            Unidades: {game_shop.pokemon}
        </React.Fragment>)
}

const mapStateToProps = (state) =>{
    return {
        game_shop: state.game_shop
    }
}

export default connect(mapStateToProps)(CantidadPokemon);