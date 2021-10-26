import Context from '../../Context';
import { useContext } from 'react';
import './Sale.scss';


const sales = [{
    img: 'https://www.dominospizza.pl/DominosPizza/media/Images/promotions/desktop/__webp/792x792-promo-50_649400_396x0.webp',
    title: '-50% na trzy pizze',
    text: 'Zamów 3 pizze z 50% rabatem',
    sale: 50,
    pizzas: 3,
    article: '-50%'
},
{
    img: 'https://www.dominospizza.pl/DominosPizza/media/Images/promotions/desktop/__webp/792x792-promo-40_516422_396x0.webp',
    title: '-40% na dwie pizze',
    text: 'Zamów 2 pizze z 40% rabatem',
    sale: 40,
    pizzas: 2,
    article: '-40%'
},
{
    img: 'https://www.dominospizza.pl/DominosPizza/media/Images/promotions/desktop/__webp/792x792-promo-30_297326_396x0.webp',
    title: '-30% na pizze',
    text: 'Zamów pizzę z 30% rabatem',
    sale: 30,
    pizzas: 1,
    article: '-30%'
}];



function Sale() {

    let addSalePrice = useContext(Context);



    return (
        <>
            <h1 className="big_lable">Kupony rabatowe</h1>

            <ul className="sales">
                {sales.map((elem) => <li key={elem.article} className="sale__item" data-sale={elem.sale} data-pizzas={elem.pizzas} data-article={elem.article}> <img src={elem.img} alt={elem.title} />
                    <div className="sale__title">{elem.title}</div>
                    <div className="sale__text">{elem.text}</div>
                    <button className="outline" onClick={(e) => {
                        let salePercent = Number(e.target.parentElement.attributes['data-sale'].value);
                        let countPizzas = Number(e.target.parentElement.attributes['data-pizzas'].value);
                        let couponArticle = e.target.parentElement.attributes['data-article'].value;
                        addSalePrice[1](salePercent, countPizzas, couponArticle);

                    }}> użyj kupon </button>    </li>)}
            </ul>
        </>
    )
}
export default Sale;