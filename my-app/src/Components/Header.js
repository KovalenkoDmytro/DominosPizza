import './Header.scss'

function Header(){
    return(
        <>
            <div className="header__wrapper">
                <div className="logo">
                    <img src="../public/images/logo.png" alt="Aditii" />
                </div>

                <div className="form" > <input type="search" name="search" className="search" placeholder="" />  </div>  
                <div className="header --item">
                    <a href="basket.php" className="basket"></a>
                    <div className="coast">$300</div>
                </div>
            </div>
        </>
    )
}

export default Header