import { combineReducers } from "redux";
import { setProductsReducer, selectedProductReducer } from './ProductReducers'

export const reducer = combineReducers({
    allProducts: setProductsReducer,
    product: selectedProductReducer
})