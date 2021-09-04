import { useEffect , useState} from 'react';
import './Content.scss';

// let productsLS =[]
// function addToLocalStorage(price, photo){
//     let product ={
//         "price": price,
//         "photo": photo
//     };
    // productsLS.push(product)
    // if(localStorage.getItem('addToBasket') !=null){
    //     productsLS = productsLS.concat( JSON.parse(localStorage.getItem('addToBasket')) )
    // }
    // localStorage.setItem('addToBasket', JSON.stringify(productsLS))
// }









function Content(props) {
    

    const [ls, setLS]= useState([]);
    
    function addLS(price,photo){
        setLS([...ls,
        {
            "price":price,
            // "photo":photo
        }])
     }
    
     useEffect(()=>{
         const raw = JSON.parse(localStorage.getItem('addToBasket'))||[] 
         console.log(raw);
         let total = 0;

         JSON.parse(localStorage.getItem('addToBasket')).forEach(element => {
            total += Number(element.price)
            console.log(Number(element.price));
        })
        console.log(total);
            setLS(raw)
        
            
    },[])

    useEffect(()=>{
        localStorage.setItem('addToBasket', JSON.stringify(ls))
    },[ls])

    function toConvertCurrency(newCurrency, price) {
        if (newCurrency == "zloty") {
            return (<div className="card_price">{Math.ceil(price * 3.79)}</div> );
        }
        else if (newCurrency == 'euro') {
            return (<div className="card_price">{Math.ceil(price * 0.84)}  </div>);
        } else if (newCurrency == 'dolars') {
            return (<div className="card_price">{price} </div>);
        }
    }

    let card = props.cards.map(function (elem) {
        return (<div className="card"><img className='product__icon' src={elem.img} alt={elem.title} />
            <a className="card__title" href="#!">{elem.title}</a>
            <div className='card__total'>{toConvertCurrency(props.currency, elem.price)} </div>
            <button className='btn small' onClick={(e) => {
                if (props.currency == 'zloty') { props.changeHandel(Math.ceil(elem.price * 3.79)) }
                else if (props.currency == 'euro') { props.changeHandel(Math.ceil(elem.price * 0.84)) }
                else { props.changeHandel(elem.price) };

                let price =e.target.previousSibling.textContent;
                let photo = e.target.parentElement.firstChild.currentSrc;
                addLS(price)
                // addToLocalStorage(price ,photo );
            }}>+add to basket </button>
        </div>
        );
    })



    return (
        <>
            <h3 className="content__title">products</h3>
            <div className="cards">
                {card}
            </div>
        </>
    )
}

export default Content;

