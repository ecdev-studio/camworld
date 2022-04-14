import {AppActionEnums} from "../redux-enum";
import {IActionFilter, IFilter} from "../../types/redux-types";

const initialState: IFilter = {
	sortBy: null,
	priceMin: null,
	priceMax: null,
	subTaxonomy: [],
	limit: 9,
	offset: null,
}

export const filterReducer = (state = initialState, action: IActionFilter): IFilter => {
	switch (action.type) {
		case AppActionEnums.CHANGE_FILTER:
			return {...state, ...action.payload}
		case AppActionEnums.CLEAR_FILTER:
			return initialState
		default:
			return state
	}
}