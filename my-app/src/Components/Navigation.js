import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Main from '../pages/Main';
import Menu from '../pages/Menu';
import Basket from "../pages/Basket";


import ContactUs from '../pages/ContactUs';
import './Styles/Navigation.scss';



let navArray = ['main', 'menu', 'contact_us', 'basket'];

function Nav(props) {
    let navItems = navArray.map(elem => <li className="nav --item" key={elem}><Link to={elem}>{elem}</Link></li>)
    let products = props.products;
    let funDelProduct = props.delProduct;
    return (
        <>
      
                <Router>
                    <nav className="navigation">
                        {navItems}
                    </nav>
                    <Switch>
                        <Route path="/main" component={Main} />
                        <Route path="/menu" component={Menu} />
                        <Route path="/contact_us" component={ContactUs} />
                        <Route exact path="/basket" render={(props) => <Basket products={products}  delProduct ={funDelProduct} {...props} />} />
                    </Switch>
                </Router>
   
        </>
    )
}
export default Nav