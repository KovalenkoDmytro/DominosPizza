import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Favorits from "./Menu/Favorits";
import Sale from "./Menu/Sale";
import Pizza from "./Menu/Pizza";

  

function Menu() {
    let [favorits, setFavorits] = useState([])

    function addFavorit(item){
        favorits.push(item)
        setFavorits(favorits)
    }

    return (
        <>
            <div className="layout">Menu
                <Router>
                    <ul className="navigation2">
                        <li><Link to='/favorits'>Favorits</Link></li>
                        <li><Link to='/sale'>Sale</Link></li>
                        <li><Link to='/pizza'>Pizza</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/favorits"  render={(props) => <Favorits globalStore={favorits}  {...props} /> }/>
                        <Route path="/sale" component={Sale} />
                        <Route path="/pizza"  render={(props) => <Pizza globalStore={addFavorit}  {...props} /> }/>
                    </Switch>
                </Router>

            </div>
        </>
    )
}
export default Menu;