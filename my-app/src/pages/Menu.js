import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ContextFavorit } from "../Context";
import Favorits from "./Menu/Favorits";
import Sale from "./Menu/Sale";
import Pizza from "./Menu/Pizza";
import "./Style/Menu.scss";


function Menu() {

    let [favorits, setFavorits] = useState([]);

    function addFavorit(product) {
        let flag = true
        favorits.forEach(element => {
            if (product.name === element.name) {
                alert("product has already been added")
                flag = false;
            }
        });
        if (flag) {
            setFavorits([...favorits, product])
            console.log(favorits);
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


    function delProduct(delProduct){
        let newProducts =   favorits.filter(elem => elem.name !== delProduct );
        setFavorits(newProducts)
    }



    return (

        <ContextFavorit.Provider value={addFavorit}>
            <div className="layout menu__page">
                <Router>
                    <ul className="navigation2">
                        <li><Link to='/favorits'>Favorits</Link></li>
                        <li><Link to='/sale'>Sale</Link></li>
                        <li><Link to='/pizza'>Pizza</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/favorits" render={(props) => <Favorits globalStore={favorits} delProduct={delProduct}  {...props} />} />
                        <Route path="/sale" component={Sale} />
                        <Route path="/pizza" component={Pizza} />
                        {/* <Route path="/pizza"  render={(props) => <Pizza globalStore={addFavorit} {...props}  /> }/> */}
                    </Switch>
                </Router>

            </div>
        </ContextFavorit.Provider>
    )
}
export default Menu;