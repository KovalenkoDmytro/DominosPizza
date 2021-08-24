// import '../Styles/Header.css'
import './Header.scss'

function Header(){
    return(
        <>
            <div className="header__wrapper">
                <div className="logo">
                    <img src="../public/images/logo.png" alt="Aditii" />
                </div>

                <input type="search" name="search" className="search" placeholder="" />    
                <div className="header --item">
                    <a href="basket.php" className="basket">
                        <img src="" alt="basket" />
                    </a>
                    <div className="coast">$300</div>
                </div>
            </div>
        </>
    )
}

export default Header