import React from 'react';
import pizza from '../../data/pizza.json'


function Pizza(props) {


    let card = pizza.map(function (elem) {
        return (<div className="card" key={elem.id}>
            <div className="addToFavorit" onClick={(e) => {
                let productName = e.target.parentElement.children[2].innerText;
                props.addFavorit(productName)
            }}>+add ToFavorit</div>
            <img className='product__icon' alt={elem.name} src={elem.img} />
            <span className='product__title'>{elem.name}</span>
            <span className='product__price'>{elem.price}</span>
            <p className='product__logdescription'>{elem.logdescription}</p>
            <button >+add to basket</button>
        </div>)
    });



    return (
        <>
            <div className="content">Pizza</div>
            <div className="banner">
                <img src="https://www.dominospizza.pl/DominosPizza/media/Images/modules/menuBanners/mobile/600x240-pizza1.jpg" alt="pizza" />
                <h1>Pizza</h1>
            </div>
            {card}
        </>
    )
}
export default Pizza;