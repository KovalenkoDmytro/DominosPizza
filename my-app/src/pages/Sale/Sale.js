import Context from '../../Context';
import { useContext } from 'react';
import './Sale.scss';






function Sale() {

    let addSalePrice = useContext(Context);
  const sales = addSalePrice[3];


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