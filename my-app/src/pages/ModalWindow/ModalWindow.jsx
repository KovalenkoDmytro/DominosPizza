import'./ModalWindow.scss' ;

function ModalWindow(props) {

    function deliveryFirstWindow(params) {
        return (
            <form className="deliveryFirstWindow">
                <label htmlFor="city">Miasto</label>
                <input className="input_solid" type="text" id="city" />
                <label htmlFor="street">Ulica</label>
                <input className="input_solid" type="text" id="street" />
                <label htmlFor="">Numer domu</label>
                <input className="input_solid" type="text" id="build" />
                <label htmlFor="apartment">Numer mieszkania</label>
                <input className="input_solid" type="text" id="apartment" />
                <button className="solid">Dalej</button>
                {/* собираем в обект данніе и передаем в следуюющее окно  */}
            </form>
        )
    }

    function deliverySecondWindow(formData) {
        return (
            <>
                <div className="adress">Twój adres dostawy:</div>
                <div className="window_content">
                    <div className="content_item">
                        <span>Lokal, w którym przygotujemy zamówienie:</span>
                        <div>
                            <img src="" alt="" />
                            <span>Dominos</span>
                        </div>
                        <span>City</span>
                        <span>Street</span>
                    </div>
                    <div className="content_item">
                        <span>Przybliżony czas dostawy:</span>
                        <div>
                            <img src="" alt="" />
                            <span>time</span>
                        </div>
                    </div>
                    <button>Zamów z dostawą</button>
                    <button>Wróć</button>
                    {/* высылаем на back fatch */}
                </div>
            </>
        )
    }

    function takeaway(params) {
        return(
            <>
                <select name="citys" id="citys">
                    <option value="">lokal1</option>
                </select>
            </>
        )
    }

   

    return (
        <>
            <div className="modal-window">
                <div className="window_top"> 
                    <span>Zamów online</span> 
                    <button className="solid" onClick={(e)=>{
                        props.setModalWindow();
                        e.target.parentElement.parentElement.classList.toggle('active')
                    }} >X</button> 
                </div>
                { props.modalWindows.delivery?deliveryFirstWindow():null}
                { props.modalWindows.takeaway?takeaway():null}
            </div>
        </>
    )


}

export default ModalWindow