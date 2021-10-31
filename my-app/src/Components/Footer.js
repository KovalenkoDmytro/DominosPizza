// import Sales from "../pages/Sales";
// import PrivatePolitic from "../pages/PrivatePolitic";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import './Styles/Footer.scss'
import facebook from '../fonts/icons/facebook.svg'
import instagram from '../fonts/icons/instagram.svg'
import youtube from '../fonts/icons/youtube.svg'







function Footer() {
    return (
        <>
            <footer>
                <div className="footer__links --first">
                    <div className="wrapper__navigation">
                        <div className="logo"><img className="logo" src="https://www.dominospizza.pl/getmedia/79f93de9-efbb-4c66-b3e6-191159e89dd0/dominos_logo.svg" alt="dominospizza" height='33' width='150'/></div>
                        <div className="footer__navigation"></div>
                    </div>
                    <ul className="socialMedia">
                        <li><a href="https://pl-pl.facebook.com/DominosPizzaPolska/" title="facebook"> <img src={facebook} alt={facebook} /> </a></li>
                        <li><a href="https://www.instagram.com/dominospizza_polska/" title="instagram"><img src={instagram} alt={instagram} /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCRk4kx-vUp67cIX1xi-whdg" title="youTube"> <img src={youtube} alt={youtube} /></a></li>
                    </ul>
                </div>

                <ul className="footer__links --second">
                    <li><a href="https://www.dominospizza.pl/getmedia/0846bb39-0f3f-4a8b-a858-831deb55035e/Regulamin_WWW_Dominos_Pizza.pdf">Regulamin</a> </li>
                    <li><a href="https://www.dominospizza.pl/getmedia/c7858a93-27c6-43bd-9a69-3173ecf529f1/Lista-alergenow-Domino-s-new.pdf">Informacje o alergenach </a></li>
                    <li><a href="https://www.dominospizza.pl/getmedia/3b3a63ab-0d65-4240-95ad-6802f0bf16c5/Regulamin-promocji-12-08-2021-DPP.pdf">Regulamin promocji - Domino's Pizza </a></li>
                    <li><a href="https://www.dominospizza.pl/getmedia/f7a1e6d3-b75e-4b12-ba71-31a8284a143e/Regulamin-promocji-12-08-2021-DOM.pdf">Regulamin promocji - Dominium by Domino's </a></li>
                </ul>
                <div className="developer">created by DKovalenko 2021</div>





                {/* <Router>
                            <Link to='/sales'>Sales</Link>
                            <Link to='/private_politic'>PrivatePolitic</Link>

                            <Switch>
                                <Route path="/sales" component={Sales} />
                                <Route path="/private_politic" component={PrivatePolitic} />
                            </Switch>
                        </Router> */}




            </footer>

        </>
    )
}
export default Footer;