import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootStore} from "../store/store";

export const useAppSelector:TypedUseSelectorHook<rootStore> = useSelector