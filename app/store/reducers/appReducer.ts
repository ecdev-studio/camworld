import {AppActionEnums} from '../redux-enum'
import {AppAction, AppState} from '../../types/redux-types'

const initialState: AppState = {
	visibleMobileMenu: false
}

export const appReducer = (state = initialState, action: AppAction): AppState => {
	switch (action.type) {
		case AppActionEnums.MOBILE_NAVIGATION_MENU:
			return {...state, visibleMobileMenu: action.payload}
		default:
			return state
	}
}