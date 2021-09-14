import close from '../../fonts/icons/close.svg';
import closeHover from '../../fonts/icons/close_hover.svg';
import '../Style/Favorits.scss';




function Favorits(props) {
    return (
        <>
            <div className="favoritsContent">
            {props.globalStore.map((elem, index) =>
                <li className="favoritProduct" key={index} >
                    <img src={elem.img} alt={elem.name} height='225' width='225'/>
                    <div className="product__wrapper">
                        <span className="product__name">{elem.name}</span>
                        <span className="product__description">{elem.description}</span>
                    </div>
                    <span className="product__price">{elem.price}</span>
                    <button className="del" onClick={(e)=>{
                        props.delProduct(e.target.parentElement.children[1].firstChild.innerText)
                    }}> <img className="close" src={close} alt="close" height='20' width='20'/>
                    <img className="closeHover" src={closeHover} alt="close" height='20' width='20'/>
                    </button>
                </li>)}
            </div>
        </>
    )
}
export default Favorits;