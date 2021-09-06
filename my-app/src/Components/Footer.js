import Sales from "../pages/Sales";
import PrivatePolitic from "../pages/PrivatePolitic";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <footer>
            <div className="footer__links">
            <Router>
              
                <Link to='/sales'>Sales</Link>
                <Link to='/private_politic'>PrivatePolitic</Link>
             
                <Switch>
                   
                    <Route  path="/sales" component={Sales} />
                    <Route  path="/private_politic" component={PrivatePolitic} />
                </Switch>
            </Router>
            </div>
        </footer>

        </>
    )
}
 export default Footer;