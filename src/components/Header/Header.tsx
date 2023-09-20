import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss'
import {LuShoppingCart} from "react-icons/lu";

const Header = () => {
    return (
        <div id='header' className='sticky top-0'>
            <div className='container'>
                <div className='header'>
                   <div>
                       <Link className='header--link' to='/'>Home</Link>
                       <Link className='header--link' to='/basket'>Basket</Link>
                       <Link className='header--link' to='/favorites'>Favorites</Link>
                   </div>
                   <button style={{position:'relative',background:'none',
                       borderRadius:'50%',
                       border:'3px solid red',
                       width:'50px',
                       height:'50px',
                       justifyContent:'center',
                       display:'flex',
                       alignItems:'center'
                   }}>
                       <LuShoppingCart className='text-2xl' style={{color:'black'}}/>
                       <div style={{
                           color:'black',
                           width:'1.7rem',
                           height:'1.7rem',
                           position:'absolute',
                           // background:'black',
                           // borderRadius:'50%',
                           // border:'2px solid rgba(169, 63, 63, 0.96)',
                           // display:'flex',
                           // alignItems:'center',
                           // justifyContent:'center',
                           bottom:'0',
                           right:'12px',
                           fontSize:'20px',
                           transform:'translate(60% , 60%)'
                       }}>
                           30
                       </div>
                   </button>
                </div>
            </div>
        </div>
    );
};

export default Header;