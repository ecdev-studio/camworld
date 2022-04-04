import {Dispatch} from 'redux'
import {AppActionEnums} from '../redux-enum'
import {AppAction} from '../../types/redux-types'

export const toggleMenu = (visible: boolean) => {
	return async (dispatch: Dispatch<AppAction>) => {
		dispatch({type: AppActionEnums.MOBILE_NAVIGATION_MENU, payload: visible})
	}
}