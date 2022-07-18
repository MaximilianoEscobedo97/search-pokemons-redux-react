import React, {useState} from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchPokemon } from "../../../redux/actions/buscadorAction";

export const BuscadorPokemon = () => {

    const dispatch = useDispatch();
    const [pokemon_name,set_pokemon_name] = useState('mewtwo');
    const handleOnChange =(event)=>{
        set_pokemon_name(event.target.value);
    }
    const handleClick = () =>{
        dispatch(fetchPokemon(pokemon_name));
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="buscar_pokemon" className="text-white">Buscar Pokemon</label>
                <input type="text" className="form-control" id="buscar_pokemon"  
                value={pokemon_name}
                onChange={handleOnChange}
                />
                <button onClick={handleClick} className="btn btn-primary mt-3">Enviar</button>
            </div>
        </div>
    )
}