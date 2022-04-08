export interface AppState {
    visibleMobileMenu: boolean
}

interface MobileAppAction {
    type: string;
    payload: boolean;
}

export interface IActionCart{
    type:string,
    payload:ICart
}
export interface ICart {
    id: number,
    name: string,
    image: string,
    price: number,
    slug: string,
    quantity: number
}

export type AppAction = MobileAppAction