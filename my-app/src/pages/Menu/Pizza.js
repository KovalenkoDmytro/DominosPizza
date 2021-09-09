import React from 'react';
import pizza from '../../data/pizza.json'
import '../Style/Pizza.scss'

import heart from '../../fonts/icons/heart.svg';
import heartHover from '../../fonts/icons/heart_hover.svg';

import Context from '../../Context';
import { useContext } from 'react';

function Pizza(props) {
    let addPrice = useContext(Context)

    let card = pizza.map(function (elem) {
        return (<div className="card" key={elem.id}>
            <div className="addToFavorit" onClick={(e) => {
                let productName = e.target.parentElement.children[2].innerText;
                props.addFavorit(productName)
            }}> 
            <img className="heart" src={heart} alt={heart} />
            <img className="heartHover" src={heartHover} alt={heartHover} />
             </div>
            <img className='product__icon' alt={elem.name} src={elem.img} width="396" height="396" />
            <div className="product__title__wrapper">
                <span className='product__title'>{elem.name}</span>
                <span className='product__price'>{elem.price}</span>

            </div>
            <p className='product__logdescription'>{elem.logdescription}</p>
            <button className='outline' onClick={()=>{addPrice(elem.name,elem.img,elem.price)}}>+add to basket</button>
        </div>)
    });



    return (
        <>
            <div className="pizza__page">
                <div className="banner">
                    <img src="https://www.dominospizza.pl/DominosPizza/media/Images/modules/menuBanners/mobile/600x240-pizza1.jpg" alt="pizza" width="1200" height="300" />
                    <h1>Pizza</h1>
                </div>
                <div className="cards">{card}</div>

            </div>
        </>
    )
}
export default Pizza;