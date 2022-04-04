import {AppActionEnums} from '../redux-enum'

export const toggleMenu = (visible: boolean) => {
  return {type: AppActionEnums.MOBILE_NAVIGATION_MENU, payload: visible}
}

