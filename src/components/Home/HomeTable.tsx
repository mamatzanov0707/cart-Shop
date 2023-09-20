import React from 'react';
import {BsBasket} from "react-icons/bs";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getBasket, getFavorites} from "../../store/Reducers/UserSlice";
import {BsFillBagHeartFill} from 'react-icons/bs'

const HomeTable = ({product}: any) => {
    const dispatch = useAppDispatch()
    const AddToBasket = () => {
        dispatch(getBasket(product))
    }
    const addToFavorites =() =>{
        dispatch(getFavorites(product))
    }
    return (
        <div
            className="max-w-sm mx-2 mb-9 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img width={200} className="rounded-t-lg mx-12" src={product.image} alt=""/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.price}</p>
                <button onClick={AddToBasket}
                   className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <BsBasket className='text-2xl' style={{marginLeft:'20px'}}/>
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </button>
                <button onClick={addToFavorites} style={{marginLeft:'10%'}}
                        className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700
                         rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
                          dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <BsFillBagHeartFill className='text-2xl' style={{marginLeft:'20px'}}/>
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </button>
            </div>
        </div>

    );
};

export default HomeTable;