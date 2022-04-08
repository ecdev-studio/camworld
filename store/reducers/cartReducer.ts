import {AppActionEnums} from "../redux-enum";
import {ICart} from "../../types/redux-types";
import {IActionCart} from "../../types/redux-types";

let initialState: [] | Array<ICart>=[]

if (typeof window !== 'undefined') {
    initialState = localStorage.getItem('orders') ? JSON.parse(<string>localStorage.getItem('orders')) : []
}

export const cartReducer = (state = initialState, action: IActionCart): [] | Array<ICart> => {
    switch (action.type) {
        case AppActionEnums.CART_CHANGE_QUANTITY:
            return state.map(x => x.id === action.payload.id ? action.payload : x)
        case AppActionEnums.CART_REMOVE_ITEM:
            return state.filter(x => x.id !== action.payload.id)
        case AppActionEnums.CART_ADD_ITEM:
            return [...state, action.payload]
        case AppActionEnums.CART_CLEAR_ALL:
            return []
        default:
            return state
    }
}