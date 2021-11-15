

function OrderPage(props){

    let productsOrdered = props.products;
    
    //get time
    function getTime(min){
        let nowTime = new Date()
        nowTime.setMinutes(nowTime.getMinutes()+min)

        let hours = nowTime.getHours()
        let minutes = nowTime.getMinutes()
        if (minutes < 10){
            minutes = `0${nowTime.getMinutes()}`
        }
        if (hours < 10){
            hours = `0${nowTime.getHours()}`
        }

        return  `${hours}:${minutes}`
    };

    
    return(
        <>
        <div className="takeInform">
            <div className="takeInform_top">
                <span>Dostawa</span>
                <span>Odbiór osobisty</span>
            </div>
            <div className="takeInform_content">
                <div className="content_item">
                    <img src="https://www.dominospizza.pl/getmedia/01a4fbdd-c165-40c9-882a-62ac87715f37/dominos_skuter.gif.aspx" alt="delivery" />
                    <span>Przybliżony czas dostawy:</span>
                    {getTime(25)}
                </div>

                <div className="content_item">
                    <img src="https://www.dominospizza.pl/getmedia/d6c4e4a2-f52a-45a1-b3bc-c7da00e4f58f/odbior_osobisty.gif.aspx" alt="takeAway" />
                    <span>Przybliżony czas odbioru:</span>
                    {getTime(15)}
                </div>
            </div>
        </div>   
        <div className="takeContent">
            <div className="content_item">

            </div>
            <div className="recapitulation">
                <span>Podsumowanie</span>
                <ul className="listProducts">
                    {productsOrdered.map((currentValue, index)=>
                        <li key={index} className='choosedProduct'>
                           <span> {currentValue.name}</span>
                           <span>{currentValue.description}</span>
                        </li>)
                    }    
                </ul>
                <div className="total">
                    
                </div>
            </div>
        </div>

         <p>Twoje zamowienie to</p>
        
        </>
    )

};

export default OrderPage;