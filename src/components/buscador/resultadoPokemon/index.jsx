import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const ResultadoPokemon = () =>{

    const buscador = useSelector((state)=> state.buscador);

    return(
        <div>
            <div>
                <h3 className="text-white">Resultado: </h3>
                {buscador.loading && <div className="text-warning">Buscando...</div>}
                {buscador.pokemon.length >= 1 && <div className="text-success" >
                    <img src={buscador.pokemon[0].sprites.front_default} alt="pokemon" />
                    <span>{buscador.pokemon[0].name}</span>
                </div>}
            </div>
            {buscador.error !== "" && <span className="text-danger">{buscador.error}</span>}
        </div>
    )
}