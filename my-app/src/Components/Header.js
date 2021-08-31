import './Header.scss';



function Header(props){
   
  

    return(
        <>
            <div className="header__wrapper">
                <div className="logo">
                    <img src="../public/images/logo.png" alt="Aditii" />
                </div>

                <div className="form" > <input type="search" name="search" className="search" placeholder="" />  </div>  
                <div className="header --item">
                    <a href="basket.php" className="basket"></a>
                    <div className="coast">number {props.coast}</div>
                </div>
            </div>
          
        </>
    )
    
}

export default Header;
