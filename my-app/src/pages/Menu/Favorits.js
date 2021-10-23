
import '../Style/Favorits.scss';

import './Favorits.scss';


function Favorits(props) {
    return (
        <>
            <div className="favoritsContent">
                {props.globalStore.map((elem, index) =>
                    <li className="favoritProduct" key={index} >
                        <img src={elem.img} alt={elem.name} height='225' width='225' />
                        <div className="product__wrapper">
                            <span className="product__name">{elem.name}</span>
                            <span className="product__description">{elem.description}</span>
                        </div>
                        <span className="product__price">{elem.price}</span>
                        <button className="del outline" onClick={(e) => {
                            props.delProduct(e.target.parentElement.children[1].firstChild.innerText)
                        }}>
                        x</button>
                    </li>)}
            </div>
        </>
    )
}
export default Favorits;