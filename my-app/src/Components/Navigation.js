import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Main from '../pages/Main';
import Basket from "../pages/Basket/Basket";
import Sale from "../pages/Sale/Sale";
import Favorits from "../pages/Favorits/Favorits";

import Pizza from "../pages/Menu/Pizza";
import './Styles/Navigation.scss';
import { useState, useEffect } from "react";
import { ContextFavorit } from "../Context";


let navArray = ['Strona glówna', 'koszyk', 'ulubione', 'promocje', 'pizza'];

function Nav(props) {
    let navItems = navArray.map(elem => <li className="nav --item" key={elem}><Link to={elem}>{elem}</Link></li>)
    let products = props.products;
    let funDelProduct = props.delProduct;


    let [favorits, setFavorits] = useState([]);

    function addFavorit(product) {
        let flag = true
        favorits.forEach(element => {
            if (product.name === element.name) {
                flag = false;
                let newProducts = favorits.filter(elem => elem.name !== product.name);
                setFavorits(newProducts)
            }
        });

        if (flag) {
            setFavorits([...favorits, product])

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
        localStorage.setItem("productsFavorits", JSON.stringify(favorits))
    }, [favorits])


    function delProduct(delProduct) {
        let newProducts = favorits.filter(elem => elem.name !== delProduct);
        setFavorits(newProducts)
    }





    return (
        <>
            <ContextFavorit.Provider value={addFavorit}>
                <Router>
                    <nav className="navigation">
                        {navItems}
                    </nav>
                    <Switch>
                        <Route path="/Strona glówna" component={Main} />
                        <Route path="/koszyk" render={(props) => <Basket products={products} delProduct={funDelProduct} {...props} />} />
                        <Route path="/promocje" component={Sale} />
                        <Route path="/ulubione" render={(props) => <Favorits globalStore={favorits} delProduct={delProduct}  {...props} />} />
                        <Route path="/pizza" component={Pizza} />
                    </Switch>
                </Router>
            </ContextFavorit.Provider>
        </>
    )
}
export default Nav