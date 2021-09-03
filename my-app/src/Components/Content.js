import './Content.scss'



function Content(props) {

    function toConvertCurrency(newCurrency, price) {
        if (newCurrency == "zloty") {
            return (<span>{Math.ceil(price * 3.79)} </span>);
        }
        else if (newCurrency == 'euro') {
            return (<span>{Math.ceil(price * 0.84)}</span>);
        } else if (newCurrency == 'dolars') {
            return (<span>{price} &#x24;</span>);
        }
    }


    let card = props.cards.map(function (elem) {
        return (<div className="card"><img className='product__icon' src={elem.img} alt={elem.title} />
            <a className="card__title" href="#!">{elem.title}</a>
            <div className='card__price'>{toConvertCurrency(props.currency, elem.price)} </div>
            <button className='btn small' onClick={() => {
                if (props.currency == 'zloty') { props.changeHandel(Math.ceil(elem.price * 3.79)) }
                else if (props.currency == 'euro') { props.changeHandel(Math.ceil(elem.price * 0.84)) }
                else { props.changeHandel(elem.price) }
            }}>buy now </button>
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

