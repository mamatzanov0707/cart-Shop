import {IClick} from "../../types/interfest";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Simulate} from "react-dom/test-utils";

interface IUser {
    user:IClick[]
    loader:boolean
    error:string
    basket:any[]
    product: any[],
    favorites:any[]
}

const initialState:IUser = {
    user:[],
    loader:false,
    error:'',
    basket:[],
    product: [],
    favorites:[]
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        getBasket(state ,action:PayloadAction<any>){
            const FoundBasket = state.basket.find(el => el.id === action.payload.id)
            if (FoundBasket) {
                state.basket = state.basket.map(el => el.id === FoundBasket.id ? {...el,quantity: el.quantity + 1}: el)
            }else {
                state.basket = [...state.basket, {...action.payload, quantity: 1}]
            }
        },
        getProduct(state,action: PayloadAction<any[]>) {
            state.product = action.payload
        },
        getMinus(state,action: PayloadAction<any>) {
            state.basket = state.basket.map(el => {
                if (el.id === action.payload.id){
                    if (el.quantity > 1){
                        return {...el,quantity: el.quantity - 1}
                    }else return el
                }else return el
            })
        },
        getDelete(state,action: PayloadAction<any>){
            state.basket = state.basket.filter(el => el.id !== action.payload.id)
        },
        getFavorites(state , action:PayloadAction<any>){
            const foundFavorites = state.favorites.find(el => el.id === action.payload.id)
            if(foundFavorites){
          state.favorites = state.favorites.map(el => el.id === foundFavorites.id ? {...el,quantity : el.quantity +1}:el)
            }else {
                state.favorites = [...state.favorites, {...action.payload ,quantity: 1 }]
            }
        }
    }
})

export default userSlice.reducer
export const {getBasket,getProduct,getMinus,getDelete , getFavorites} = userSlice.actions