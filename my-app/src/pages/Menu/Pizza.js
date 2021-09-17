import React from 'react';
import pizza from '../../data/pizza.json'
import '../Style/Pizza.scss'

import heart from '../../fonts/icons/heart.svg';
import heartHover from '../../fonts/icons/heart_hover.svg';

import Context from '../../Context';
import { ContextFavorit } from '../../Context';
import { useContext} from 'react';

import Bestseller from '../../fonts/icons/favourite.svg';
import New from '../../fonts/icons/new.svg';
import Hot from '../../fonts/icons/chili-pepper.svg';
import Vege from '../../fonts/icons/vegan.svg';


function Pizza(props) {
    let addPrice = useContext(Context);
    let addFavorit = useContext(ContextFavorit);

  

    let card = pizza.map(function (elem) {
        return (<div className="card" key={elem.id}>
            <div className="addToFavorit"  onClick={(e) => {
                
                let productFavorit ={
                    name: e.target.parentElement.nextElementSibling.nextElementSibling.firstChild.innerText,
                    img: e.target.parentElement.nextSibling.src,
                    description: e.target.parentElement.parentElement.children[4].innerText,
                    price:e.target.parentElement.nextElementSibling.nextElementSibling.lastChild.innerText
                }
                addFavorit(productFavorit)
               
                  
                e.target.parentElement.classList.toggle('Active');
            }}>
                <img className="heart" src={heart} alt={heart} />
                <img className="heartHover" src={heartHover} alt={heartHover} />
            </div>
            <img className='product__icon' alt={elem.name} src={elem.img} width="396" height="396" />
            <div className="product__title__wrapper">
                <span className='product__title'>{elem.name}</span>
                <span className='product__price'>{elem.price}</span>
            </div>
            <div className="infoTag">
                {elem.sorte === "Bestseller" ? <img className="tagIcon" src={Bestseller} alt='Bestseller' width='25px' height='25px'/> : ""}
                {elem.sorte === "New" ? <img className="tagIcon" src={New} alt='New' width='25px' height='25px'/> : ""}
                {elem.sorte === "Hot" ? <img className="tagIcon" src={Hot} alt='Hot' width='25px' height='25px'/> : ""}
                {elem.sorte === "Vege" ? <img className="tagIcon" src={Vege} alt='Vege' width='25px' height='25px'/> : ""}
                <div className="tagIcon">{elem.sorte}</div>
            </div>
            <p className='product__logdescription'>{elem.logdescription}</p>
            <button className='outline' onClick={() => { addPrice(elem.name, elem.img, elem.price, elem.logdescription, elem.sorte) }}>+add to basket</button>
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