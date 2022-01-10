import Bestseller from '../../fonts/icons/favourite.svg';
import New from '../../fonts/icons/new.svg';
import Hot from '../../fonts/icons/chili-pepper.svg';
import Vege from '../../fonts/icons/vegan.svg';
import './Basket.scss';
import iconBasketEmpty from './emptyBasket.jpg'
import { Link } from 'react-router-dom';

function Basket(props) {

    function showContent() {
        if (props.products.length === 0) {
            return (
                <div className="content_wrapper">
                    <img src={iconBasketEmpty} alt="empty basket" />
                    <h3>Twój koszyk jest pusty</h3>
                    <p>Nic straconego! Na pewno znajdziesz coś smakowitego w naszym menu. Dodaj do koszyka produkty , na które masz ochotę i zamów je online - szybko i wygodnie.</p>
                    <Link to="/pizza"><button className="solid">przejdź do zakupu </button></Link>
                </div>
            )
        } else {
            return (
                props.products.map((elem, index) =>
                    <li className="product" key={index} >

                        <img src={elem.url} alt={elem.name} height='225' width='225' />
                        <div className="product__wrapper">
                            <span className="product__name">{elem.name}</span>
                            <span className="product__description">{elem.description}</span>
                        </div>
                        <div className="infoTag">
                            {elem.sort === "Bestseller" ? <img className="tagIcon" src={Bestseller} alt='Bestseller' width='25px' height='25px' /> : ""}
                            {elem.sort === "New" ? <img className="tagIcon" src={New} alt='New' width='25px' height='25px' /> : ""}
                            {elem.sort === "Hot" ? <img className="tagIcon" src={Hot} alt='Hot' width='25px' height='25px' /> : ""}
                            {elem.sort === "Vege" ? <img className="tagIcon" src={Vege} alt='Vege' width='25px' height='25px' /> : ""}
                            <div className="tagIcon">{elem.sort}</div>
                        </div>
                        <div className="product_conuter">
                            <span className="counter">{elem.count}</span>
                            <span>zł</span>
                        </div>
                        <span className="product__price">{(elem.price * elem.count).toFixed(2) + "zł"}</span>

                        <button className="del solid" onClick={(e) => {
                            let countProduct = Number(e.target.parentElement.querySelector('.product_conuter .counter').textContent);
                            let productName = e.target.parentElement.querySelector('.product__wrapper .product__name').innerText;
                            props.delProduct(productName, countProduct);
                        }}>x</button>
                    </li>)
            )
        }

    }

    return (
        <>
            <div className="basket_page">
                <h1 className="big_lable">Koszyk</h1>
                {showContent()}
                {props.products.length > 0 ? <Link to="/orderPage"><button className="solid">Podtwierdzam</button></Link> : null}
            </div>
        </>
    )
}
export default Basket;  