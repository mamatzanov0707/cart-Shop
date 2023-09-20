import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Basket from "./components/Basket/Basket";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/basket' element={ <Basket/> }/>
            <Route path='/favorites' element={ <Favorites/> }/>
        </Routes>
    </div>
  );
}

export default App;
