import fakeApis from "../../fakeApis/fakeApis.jsx";
import { Actiontypes } from "../Contants/Action-types.jsx";

// console.log(fakeApis(), "fake aps")
export const fetchProducts = () => async function (dispatch) {
    const response = await fakeApis.get("products");
    // console.log(response)
    dispatch({ type: Actiontypes.FETCH_PRODUCTS, payload: response?.data })

    // const respone = await axios.get("products");
    // console.log(respone);
    // return {
    //     type: Actiontypes.SET_PRODUCTS,
    //     payload: respone
    // }
}
export const fetchProduct = (id) => async function (dispatch) {
    const response = await fakeApis.get(`products/${id}`);
    // console.log(response)
    dispatch({ type: Actiontypes.SELECTED_PRODUCT, payload: response?.data })

}
export const setProducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectProducts = (product) => {
    return {
        type: Actiontypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectProducts = () => {
    return {
        type: Actiontypes.REMOVE_SELECTED_PRODUCT,
    }
}