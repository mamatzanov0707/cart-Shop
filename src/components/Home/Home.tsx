import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {getProductSuccess} from "../../store/Reducers/Creators";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import HomeTable from "./HomeTable";
import 'react-accessible-accordion/dist/fancy-example.css';


const Home = () => {
    
    const {product} = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getProductSuccess())
    },[])
    console.log(product)
    return (
        <div id='home'>
            <div className="container">
                <div className='home flex items-center flex-wrap justify-between'>
                    {
                        product.map(el => <HomeTable product={el}/>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;