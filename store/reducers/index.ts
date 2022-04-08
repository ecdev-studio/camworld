import {combineReducers} from 'redux'
import {appReducer} from './appReducer'
import {cartReducer} from "./cartReducer";

export const rootReducer = combineReducers({
	app: appReducer,
	cart:cartReducer
})

export type RootState = ReturnType<typeof rootReducer>
