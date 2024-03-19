import {combineReducers} from 'redux'
import {appReducer} from './appReducer'
import {cartReducer} from "./cartReducer";
import {filterReducer} from "./filterReducer";

export const rootReducer = combineReducers({
	app: appReducer,
	cart: cartReducer,
	filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>
