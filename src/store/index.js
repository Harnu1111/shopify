import { combineReducers} from "redux";
 import {configureStore} from "@reduxjs/toolkit"
import ProductsReducer from "./reducers/ProductsReducer"
import CartReducer from "./reducers/CartReducer"
import ComputerReducer from "./reducers/ComputerReducer";
import SpeakerReducer from "./reducers/SpeakerReducer";
import GameReducer from "./reducers/GameReducer";
import TvReducer from "./reducers/TvReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';
const reducers = combineReducers({
  ProductsReducer,
  CartReducer,
  TvReducer,
  SpeakerReducer,
  GameReducer,
  ComputerReducer,
});
const store = configureStore({ reducer:reducers }, devToolsEnhancer());
export default store;