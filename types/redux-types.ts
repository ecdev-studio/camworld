import {AppActionEnums} from "../store/redux-enum";

export interface AppState {
	visibleMobileMenu: boolean
}

interface MobileAppAction {
	type: AppActionEnums.MOBILE_NAVIGATION_MENU;
	payload: boolean;
}

export type AppAction = MobileAppAction