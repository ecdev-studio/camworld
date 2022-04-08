import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const typedSelector: TypedUseSelectorHook<RootState> = useSelector