import { Link } from 'react-router-dom';
import { Products } from './products';
import { useContext ,useState } from 'react';
import {cartContext  } from "../App.js";
export const Shop = () => {
    const [cart, setCart] = useContext(cartContext);

    return (
        <>
            <br/>
            <Link to="/checkOut">check out</Link>
            <br/>
            <Products/>
        </>
    )
}