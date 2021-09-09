import './Styles/Header.scss'


function Header(props){
    return(
        <>
        <header>
            <img className="logo" src="https://www.dominospizza.pl/getmedia/79f93de9-efbb-4c66-b3e6-191159e89dd0/dominos_logo.svg" alt="dominospizza" />    
            <div className="basket">
                <div className="total">{props.totalPrice}</div>
            </div>
        </header> 
        </>
    )
}
 export default Header;