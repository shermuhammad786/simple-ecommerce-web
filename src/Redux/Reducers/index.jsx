import { combineReducers } from "redux";
import {
    ProductReducer
    , SelectProductReducer
} from "./ProductReducer";

export const reducers = combineReducers({
    allProducts: ProductReducer,
    product: SelectProductReducer,
})