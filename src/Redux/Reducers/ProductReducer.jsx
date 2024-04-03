import { Actiontypes } from "../Contants/Action-types.jsx"

const initialState = {
    porducts: []
}

export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return { ...state, porducts: payload }

        default:
            return state;
    }
}
export const SelectProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case Actiontypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}
