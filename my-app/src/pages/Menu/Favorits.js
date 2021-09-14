
function Favorits(props) {
    return (
        <>
            <div className="content">favorits page</div>
            {props.globalStore.map((elem, index) =>
                <li key={index} >
                    <img src={elem.img} alt={elem.name} />
                    <div className="product__wrapper">
                        <span className="product__name">{elem.name}</span>
                        <span className="product__description">{elem.description}</span>
                    </div>
                    <span className="product__price">{elem.price}</span>
                    <button className="del" onClick={(e)=>{
                        props.delProduct(e.target.parentElement.children[1].firstChild.innerText)
                    }}>X</button>
                </li>)}
        </>
    )
}
export default Favorits;