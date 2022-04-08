import {AppActionEnums} from '../redux-enum'
import {ICart} from "../../types/redux-types";
import {useTypedSelector} from "../../hook/useTypedSelector";

export const toggleMenu = (visible: boolean) => {
    return {type: AppActionEnums.MOBILE_NAVIGATION_MENU, payload: visible}
}

export const ChangeQuantity = (item: ICart, quantity: number) => {
    let existItem = useTypedSelector(state => state.cart && state.cart.length > 0 && state.cart.find(x => x.id === item.id))

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
export const RemoveCartItem = (item: ICart) => {
    return {type: AppActionEnums.CART_REMOVE_ITEM, payload: item}
}
export const ClearCart = () => {
    return {type: AppActionEnums.CART_CLEAR_ALL}
}