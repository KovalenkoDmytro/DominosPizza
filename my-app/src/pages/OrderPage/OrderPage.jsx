import "./OrderPage.scss"

function OrderPage(props) {

    let productsOrdered = props.products;

    //get time
    function getTime(min) {
        let nowTime = new Date()
        nowTime.setMinutes(nowTime.getMinutes() + min)

        let hours = nowTime.getHours()
        let minutes = nowTime.getMinutes()
        if (minutes < 10) {
            minutes = `0${nowTime.getMinutes()}`
        }
        if (hours < 10) {
            hours = `0${nowTime.getHours()}`
        }

        return `${hours}:${minutes}`
    };


    return (
        <>
            <div className="order_page">
                <div className="order_page_top">
                    <img className="background" src="https://www.dominospizza.pl/DominosPizza/media/Images/modules/cartconfiguration/bg_1200x471.jpg" alt="dominos" />
                    <div className="takeInform">
                        <div className="takeInform_top">
                            <span>Dostawa</span>
                            <span>Odbiór osobisty</span>
                        </div>
                        <div className="takeInform_content">
                            <div className="content_item">
                                <img src="https://www.dominospizza.pl/getmedia/01a4fbdd-c165-40c9-882a-62ac87715f37/dominos_skuter.gif.aspx" alt="delivery" />
                                <span>Przybliżony czas dostawy:</span>
                                <span className="item_time">{getTime(25)}</span>
                            </div>

                            <div className="content_item">
                                <img src="https://www.dominospizza.pl/getmedia/d6c4e4a2-f52a-45a1-b3bc-c7da00e4f58f/odbior_osobisty.gif.aspx" alt="takeAway" />
                                <span>Przybliżony czas odbioru:</span>
                                <span className="item_time">{getTime(15)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="takeContent">
                    <div className="content_item">

                    </div>
                    <div className="recapitulation">
                        <span className="recap_title">Podsumowanie</span>
                        <ul className="listProducts">
                            {productsOrdered.map((currentValue, index) =>
                                <li key={index} className='choosedProduct'>
                                    <span className="product_name"> {currentValue.name}</span>
                                    <span className="product_descrip">{currentValue.description}</span>
                                    <span className="product_price">{currentValue.price}</span>
                                </li>)
                            }
                        </ul>
                        <div className="total">{props.totalPrice}</div>
                    </div>
                </div>

                <p>Twoje zamowienie to</p>
            </div>
        </>
    )

};

export default OrderPage;