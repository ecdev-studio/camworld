export interface AppState {
	visibleMobileMenu: boolean;
}

interface MobileAppAction {
	type: string;
	payload: boolean;
}

export interface IActionCart {
	type: string;
	payload: ICart;
}

export interface ICart {
	id: number;
	name: string;
	image: string;
	price: number;
	slug: string;
	quantity: number;
}

export interface IFilter {
	sortBy: string | null;
	priceMin: number | null;
	priceMax: number | null;
	subTaxonomy: number[];
	limit: number;
	offset: number;
	page: number;
}

export interface IActionFilter {
	type: string;
	payload?: IFilter;
}

export type AppAction = MobileAppAction