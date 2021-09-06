import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Main from '../pages/Main';
import Menu from '../pages/Menu';

import ContactUs from '../pages/ContactUs';
import './Styles/Navigation.scss';

let navArray = ['main', 'menu', 'contact_us', 'sales','private_politic'];

function Nav() {
    let navItems = navArray.map(elem => <li className="nav --item" key={elem}><Link to={elem}>{elem}</Link></li>)
    return (
        <>
         
            <Router>
                <nav className="navigation">
                    {navItems}
                </nav>
                <Switch>
                    <Route  path="/main" component={Main} />
                    <Route  path="/menu" component={Menu} />
                    <Route  path="/contact_us" component={ContactUs} />
              
                </Switch>
            </Router>
        </>
    )
}
export default Nav