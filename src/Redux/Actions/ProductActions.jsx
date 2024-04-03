import { Actiontypes } from "../Contants/Action-types.jsx";

export const setProducts = (products)=>{
    return{
        type:Actiontypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectProducts = (product)=>{
    return{
        type:Actiontypes.SELECTED_PRODUCT,
        payload:product
    }
}
export const removeSelectProducts = ()=>{
    return{
        type:Actiontypes.REMOVE_SELECTED_PRODUCT,
    }
}