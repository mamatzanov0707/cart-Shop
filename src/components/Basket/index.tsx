import React from 'react';
import {IoMdTrash} from 'react-icons/io'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {BsFillPatchPlusFill , BsFillPatchMinusFill} from 'react-icons/bs'
import {getBasket, getDelete, getMinus} from "../../store/Reducers/UserSlice";

const BasketCard = ({product}:any) => {
    const dispatch = useAppDispatch()
    const AddPlus = () => {
        dispatch(getBasket(product))
    }
    const Minus = () => {
        dispatch(getMinus(product))
    }
    const Delete = () => {
        dispatch(getDelete(product))
    }
    return (
            <tr className="bg-white border-b dark:bg-gray-800  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img width={100} src={product.image} alt=""/>
                </th>
                <td className="px-6 py-4">
                    {product.title}
                </td>
                <td className="px-5 py-9 px-6 my-8 flex justify-between w-[120px] text-lg">
                    <button onClick={Minus}><BsFillPatchMinusFill/></button>
                    <p>{product.quantity}</p>
                    <button onClick={AddPlus}><BsFillPatchPlusFill/></button>
                </td>
                <td className="px-6 py-4">
                    ${product.price * product.quantity}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#"
                       className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <IoMdTrash onClick={Delete} className='text-2xl' style={{color:'red'}}/>
                    </a>
                </td>
            </tr>
    );
};

export default BasketCard;