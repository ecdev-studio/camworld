export interface AppState {
  visibleMobileMenu: boolean
}

interface MobileAppAction {
  type: string;
  payload: boolean;
}

export type AppAction = MobileAppAction