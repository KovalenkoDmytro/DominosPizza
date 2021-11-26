import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Main from '../pages/Main';
import Basket from "../pages/Basket/Basket";
import Sale from "../pages/Sale/Sale";
import Favorits from "../pages/Favorits/Favorits";
import Pizza from "../pages/Menu/Pizza";
import OrderPage from "../pages/OrderPage/OrderPage";


import './Styles/Navigation.scss';
import { useState, useEffect } from "react";
import { ContextFavorit } from "../Context";

// let navArray = ['Strona glówna', 'koszyk', 'ulubione', 'promocje', 'pizza'];

function Nav(props) {
    // let navItems = navArray.map(elem => <li className="nav --item" key={elem}><Link to={elem}>{elem}</Link></li>)
    let products = props.products;
    let funDelProduct = props.delProduct;
    let funShowModalWindow = props.setModalWindow;
    let [favorits, setFavorits] = useState([]);
    let totalPriceInBasket = props.totalPrice;
    let salePrice =props.salePrice;
    let [favoritsCount, setFavoritsCount] = useState(0);

    //add favoritsCount to localstorage
    function addFavoritToLS(){
        if(localStorage.getItem('productsCounterInFavorit')==null){
            localStorage.setItem('productsCounterInFavorit', 1);
          }else{
            let countInBasket = Number(localStorage.getItem('productsCounterInFavorit'));
            localStorage.setItem('productsCounterInFavorit', countInBasket + 1)  
          } 
    }
   
    //remove favoritsCount to localstorage
    function removeFavoritToLS(){
        if(localStorage.getItem('productsCounterInFavorit')==null){
            return
          }else{
            let countInBasket = Number(localStorage.getItem('productsCounterInFavorit'));
            localStorage.setItem('productsCounterInFavorit', countInBasket - 1)  
          } 
    }

    function addFavorit(product) {
        let flag = true
        favorits.forEach(element => {
            if (product.name === element.name) {
                flag = false;
                let newProducts = favorits.filter(elem => elem.name !== product.name);
                setFavorits(newProducts);
                setFavoritsCount(favoritsCount - 1);
                removeFavoritToLS();
            }
        });

        if (flag) {
            setFavorits([...favorits, product]);
            setFavoritsCount(favoritsCount + 1);
            addFavoritToLS();

        } else return
        
    
      
    }

    useEffect(() => {
        if (localStorage.getItem("productsFavorits") == null) {
            localStorage.setItem("productsFavorits", '')
        } else {
            const products = localStorage.getItem("productsFavorits") || [];
            setFavorits(JSON.parse(products))
        }
    }, [])
    useEffect(() => {
    }, [favoritsCount])

    useEffect(() => {
        localStorage.setItem("productsFavorits", JSON.stringify(favorits))
    }, [favorits])
    
    
    useEffect(() => {
        setFavoritsCount(Number(localStorage.getItem('productsCounterInFavorit')))
    }, [])

    //del product from favorits 
    function delProduct(delProduct) {
        let newProducts = favorits.filter(elem => elem.name !== delProduct);
        setFavorits(newProducts);
        removeFavoritToLS();
        setFavoritsCount(favoritsCount-1)
    }
    
 
   
    
    return (
        <>
            <ContextFavorit.Provider value={addFavorit}>
               
                    <nav className="navigation">
                        {/* {navItems} */}
                        <li className="nav --item" key={'Strona glówna'}><Link to={'Strona glówna'}>{'Strona glówna'}</Link></li>
                        <li className="nav --item basket" key={'koszyk'}>
                            <Link to={'koszyk'}>{'koszyk'}</Link>
                            {props.productsCounterInBasket>0?<span className="bage_counter">{props.productsCounterInBasket}</span>: null}
                        </li>
                        <li className="nav --item favorites" key={'ulubione'}>
                            <Link to={'ulubione'}>{'ulubione'}</Link>
                            {favoritsCount>0?<span className="bage_counter">{favoritsCount}</span>: null}
                        </li>
                        <li className="nav --item" key={'promocje'}><Link to={'promocje'}>{'promocje'}</Link></li>
                        <li className="nav --item" key={'pizza'}><Link to={'pizza'}>{'pizza'}</Link></li>
                    </nav>
                    <Switch>
                        <Route exact path="/" render={(props) => <Main  setModalWindow={funShowModalWindow} {...props} />} />
                        <Route path="/Strona glówna" render={(props) => <Main  setModalWindow={funShowModalWindow} {...props} />} />
                        <Route path="/koszyk" render={(props) => <Basket products={products} delProduct={funDelProduct} {...props} />} />
                        <Route path="/promocje" component={Sale} />
                        <Route path="/ulubione" render={(props) => <Favorits globalStore={favorits} delProduct={delProduct}  {...props} />} />
                        <Route exact path="/pizza" render={(props) => <Pizza favoritProduct={favorits}  {...props} />} />
                        <Route path="/orderPage" render={(props) => <OrderPage products={products} totalPrice={totalPriceInBasket}  salePrice={salePrice} {...props} />} />
                    </Switch>
            
            </ContextFavorit.Provider>
        </>
    )
}
export default Nav