import { combineReducers } from "redux";
import { buscador } from "./buscadorReducer";
import { game_shop } from "./gameShopReducer";

export const rootReducers = combineReducers({
    game_shop,
    buscador
});