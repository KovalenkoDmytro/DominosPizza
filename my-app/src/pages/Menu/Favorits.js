
import '../Style/Favorits.scss';
import './Favorits.scss';


function Favorits(props) {

    function showContent() {
        if (props.globalStore.length === 0) {
            return (
                <>
                     <img src={iconFavoritEmpty} alt="empty basket" />
                    <h3>Tutaj znajdziesz swoje ulubione produkty</h3>
                    <p>Aby móc przeglądać polubione produkty dodaj produkt</p>
                </>
            )
        } else {
            return (
                props.globalStore.map((elem, index) =>
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
                    </li>)
            )
        }

    }

    return (
        <>
            <div className="favoritsContent">
                <h1 className="big_lable">Ulubione</h1>
                {showContent()}
            </div>

        </>
    )
}
export default Favorits;