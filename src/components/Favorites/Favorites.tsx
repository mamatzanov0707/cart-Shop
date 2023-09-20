import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {IoMdTrash} from 'react-icons/io'

const Favorites = () => {
    const {favorites} = useAppSelector(state => state.userSlice)

    return (
        <div id='favorites' className='flex-wrap flex justify-content-sm-between'>
            <div className="container">
                <div className='favorites flex flex-wrap  justify-content-sm-between ' style={{
                    alignItems:'center',
                    padding:'8ex 0',
                    justifyContent:'space-between'
                }}>
                    {
                        favorites.map(el =>(
                            <div>
                                <img width={250} src={el.image} alt=""/>
                                <h3 style={{width:'200px' , textAlign:'center'}}>{el.title}</h3>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600
                                        to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                                        focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                                        text-sm px-2 py-2 text-center mr-2 mb-2">
                                    <IoMdTrash className='text-2xl'/>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorites;