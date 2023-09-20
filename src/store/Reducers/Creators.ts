import {AppDispatch} from "../store";
import {getBasket, getProduct} from "./UserSlice";
import axios from "axios";


export const getProductSuccess = () => async(dispatch : AppDispatch) =>{
    const url = await axios.get(`https://fakestoreapi.com/products`)
    const {data} = await url
    dispatch(getProduct(data))
}