import './Content.scss'


function Content(props){
    let card = props.cards.map(function(elem){
        return(<div className="card"><img className='product__icon' src={elem.img} alt={elem.title}/> 
                    <a className="card__title" href="#!">{elem.title}</a>
                    <span className='card__price'>{elem.price}$</span>
                    <button className='btn small'>buy now</button>
                </div>
        );
    })
   
    return(
        <>
        <h3 className="content__title">products</h3>
        <div className="cards">
            {card}
        </div>
        </>
    )
}

export default Content