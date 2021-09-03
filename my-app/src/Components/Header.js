import './Header.scss';

function Header(props) {

    function changeCurrentCoust(coast, currency) {
        if (currency == "zloty") {
            return (<span>{Math.ceil(coast * 3.79)} zł</span>);
        }
        else if (currency == 'euro') {
            return (<span>{Math.ceil(coast * 0.84)} &#8364;</span>);
        } else if (currency == 'dolars') {
            return coast;
        }

    }

    return (
        <>
            <div className="header__wrapper">
                <div className="logo">
                    <img src="../public/images/logo.png" alt="Aditii" />
                </div>

                <div className="form" > <input type="search" name="search" className="search" placeholder="" />  </div>
                <div className="currency">
                    <select name="currency" id="currency" onChange={(e) => {
                        changeCurrentCoust();
                        props.changeCurrency(e.target.value);
                    }} >
                        <option value="euro">&#8364;</option>
                        <option value="zloty">pln</option>
                        <option value="dolars" selected="selected">&#x24;</option>
                    </select>
                </div>
                <div className="header --item">
                    <a href="basket.php" className="basket"></a>
                    <div className="total">
                        <div className="coast">
                            {/* {props.coast} */}
                            {changeCurrentCoust(props.coast, props.currency)}
                        </div>
                        <div className="currency">{props.currency}</div>
                    </div>

                </div>
            </div>

        </>
    )

}

export default Header;
