import "./OrderPage.scss";
import { useState, useEffect } from "react";

function OrderPage(props) {

    let productsOrdered = props.products;
    let [discountprice, setDiscountprice] = useState();
    let [delivery, setDelivery] = useState(false)


    useEffect(() => {
        if (props.salePrice.length > 0) {
            setDiscountprice(props.salePrice[0].price.toFixed(2));
            document.querySelector('.total_price').classList.add('underline')
        }
    }, []);

    useEffect(() => {
        console.log(delivery);
    }, [delivery])


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
                            <span onClick={() => {
                                setDelivery(true)
                            }}>Dostawa</span>
                            <span onClick={() => {
                                setDelivery(false)
                            }}>Odbiór osobisty</span>
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
                                    <div className="aboutProduct">
                                        <span className="product_name"> {currentValue.name}</span>
                                        <span className="product_descrip">{currentValue.description}</span>
                                    </div>
                                    <span className="product_price">{currentValue.price} zł</span>
                                </li>)
                            }
                        </ul>
                        <div className="total">
                            <span>suma</span>
                            <span className="total_price">{props.totalPrice} zł</span>
                        </div>
                        {props.salePrice.length > 0 ?
                            <div className="salePrice">
                                <span className="discount">Zniżka {props.salePrice[0].coupon}</span>
                                <span className="discountPrice">ze zniżką {discountprice} zł</span>
                            </div>
                            : null}


                    </div>
                </div>

            </div>
        </>
    )

};

export default OrderPage;