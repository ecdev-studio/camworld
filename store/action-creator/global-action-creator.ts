import {AppActionEnums} from '../redux-enum'
import {ICart} from "../../types/redux-types";
import {store} from "../index";

export const toggleMenu = (visible: boolean) => {
    return {type: AppActionEnums.MOBILE_NAVIGATION_MENU, payload: visible}
}

export const changeQuantity = (item: ICart, quantity: number) => {
    const existItem = store.getState().cart.find(x => x.id === item.id)
    if (existItem) {
        if (existItem.quantity + quantity > 0) quantity = existItem.quantity + quantity
        else quantity = 0
    }

    const payload = {
        name: item.name,
        image: item.image,
        price: item.price,
        id: item.id,
        slug: item.slug,
        quantity: quantity
    }
    if (!existItem) return {type: AppActionEnums.CART_ADD_ITEM, payload: payload}
    if (quantity === 0) return {type: AppActionEnums.CART_REMOVE_ITEM, payload: payload}
    else return {type: AppActionEnums.CART_CHANGE_QUANTITY, payload: payload}
}
export const removeCartItem = (item: ICart) => {
    return {type: AppActionEnums.CART_REMOVE_ITEM, payload: item}
}
export const clearCart = () => {
    return {type: AppActionEnums.CART_CLEAR_ALL}
}