import React, { useState } from "react";
import Logo from './logo.jsx'
import Buttons from "./Buttons.jsx"
import SearchBar from "./SearchBar.jsx"
import Navbar from "./Navbar.jsx";
import ShoppingCartBar from "./ShoppingCartBar.jsx";
import ShoppingCart from "./ShoppingCart.jsx";

export default function Header({productsInCart, onQuantityChange, onProductRemove, fetchCart, cart}) {

    return (
        <div>
            <div>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Coda&family=Fira+Sans&family=Dancing+Script&family=Kay+Pho+Du&family=Spirax&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Abel&family=Cantora+One&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/> 

                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-light.css" />
                <link href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap" rel="stylesheet"/> 
            </div>
            <div className="bg-yellow h-[114px] w-[100%] fixed z-20">
                <Logo />                
                <ShoppingCart productsInCart={productsInCart} onQuantityChange={onQuantityChange} onProductRemove={onProductRemove} Cart={cart} fetchCart={fetchCart}/>
                <Buttons />
                <SearchBar />
                <Navbar />
            </div>

        </div>
    )
}