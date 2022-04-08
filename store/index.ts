import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './reducers'

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))
let currentCartValue = store.getState().cart
store.subscribe(() => {
    let previousCartValue = currentCartValue
    currentCartValue = store.getState().cart
    if (currentCartValue !== previousCartValue) {
        try {
            const serializedState = JSON.stringify(store.getState().cart);
            localStorage.setItem('orders', serializedState);
        } catch (e) {
            console.log(e)
        }
    }
})