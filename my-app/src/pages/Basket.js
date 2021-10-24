import Bestseller from '../fonts/icons/favourite.svg';
import New from '../fonts/icons/new.svg';
import Hot from '../fonts/icons/chili-pepper.svg';
import Vege from '../fonts/icons/vegan.svg';
import './Basket.scss';


function Basket(props) {


    function showContent() {
        if (props.products.length === 0) {
            return (
                <h3>Koszyk jest pusty</h3>
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
                        <span className="product__price">{elem.price + "zł"}</span>

                        <button className="del outline" onClick={(e) => {
                            props.delProduct(e.target.parentElement.children[1].firstChild.innerText)
                        }}>x
                        </button>
                    </li>)
            )
        }

    }

    return (
        <>
            <div className="basket_page">
                <h1 className="big_lable">Koszyk</h1>
                {showContent()}
            </div>
        </>
    )
}
export default Basket;