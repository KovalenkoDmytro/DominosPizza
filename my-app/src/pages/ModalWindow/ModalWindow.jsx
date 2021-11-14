import'./ModalWindow.scss' ;
import React, { useState} from 'react';
import { Link} from 'react-router-dom';



function ModalWindow(props) {
    const [formValidate, setFormValidate] = useState(
        {
            city: false,
            street: false,
            buld: false,
            apart: true,
        }
        );
    const [adress, setAdress] = useState({
        city: '',
        street: '',
        buldNumb: '',
        apart: '',
    });

    const selectStore = React.createRef();

    function deliveryFirstWindow() {
        return (
            <form className="deliveryFirstWindow" >
                <label htmlFor="city">Miasto*</label>
                <input className="input_solid" type="text" name="city" onChange={(e)=>{
                    let customerAdress
                     let label = e.target.previousElementSibling;
                     let regulaExpression = /^[a-zA-Z]+$/
                     if(regulaExpression.test(e.target.value)){
                        customerAdress = e.target.value;
                        let newObj = {
                            city: customerAdress,
                            street: adress.street,
                            buldNumb: adress.buldNumb,
                            apart: adress.apart,
                        } 
                        setAdress(newObj)    

                        let newObjValid = {
                            city: true,
                            street: formValidate.street,
                            buld: formValidate.buld,
                            apart: formValidate.apart,
                        }
                        setFormValidate(newObjValid)


                        if(label.classList.contains('warning')){
                            label.classList.remove('warning');
                            label.textContent= 'Miasto*';
                        };
                     }
                     else{
                        label.textContent= 'linijka moze zawierac tylko znaki alfabetyczne';
                        label.classList.add('warning');
                        let newObjValid = {
                            city: false,
                            street: formValidate.street,
                            buld: formValidate.buld,
                            apart: formValidate.apart,
                        }
                        setFormValidate(newObjValid)
                    
                    }
                    }
                }/>
                <label htmlFor="street">Ulica*</label>
                <input className="input_solid" type="text" name="street" onChange={(e)=>{
                     let customerStreet;
                     let label = e.target.previousElementSibling;
                     let regulaExpression = /^[a-zA-Z]+$/;
                     if(regulaExpression.test(e.target.value)){
                        customerStreet = e.target.value;
                        let newObj = {
                            city: adress.city,
                            street: customerStreet,
                            buldNumb: adress.buldNumb,
                            apart: adress.apart,
                        } 
                        setAdress(newObj)  
                        
                        
                        let newObjValid = {
                            city: formValidate.city,
                            street: true,
                            buld: formValidate.buld,
                            apart: formValidate.apart,
                        }
                        setFormValidate(newObjValid)


                        if(label.classList.contains('warning')){
                            label.classList.remove('warning');
                            label.textContent= 'Ulica*';
                        };
                     }
                     else{
                        label.textContent= 'linijka moze zawierac tylko znaki alfabetyczne lub ';
                        label.classList.add('warning');
                        let newObjValid = {
                            city: formValidate.city,
                            street: false,
                            buld: formValidate.buld,
                            apart: formValidate.apart,
                        }
                        setFormValidate(newObjValid)
                    }
                    }
                }/>
                <label htmlFor="">Numer domu*</label>
                <input className="input_solid" type="text" name="build" onChange={(e)=>{
                     let customerBuild;
                     let label = e.target.previousElementSibling;
                    let regulaExpression =/^[0-9]+$/;
                    if(regulaExpression.test(e.target.value)){
                        customerBuild = e.target.value;
                        let newObj = {
                            city: adress.city,
                            street: adress.street,
                            buldNumb: customerBuild,
                            apart: adress.apart,
                        } 
                        setAdress(newObj) 

                        let newObjValid = {
                            city: formValidate.city,
                            street: formValidate.street,
                            buld: true,
                            apart: formValidate.apart,
                        }
                        setFormValidate(newObjValid)

                        if(label.classList.contains('warning')){
                            label.classList.remove('warning');
                            label.textContent= 'Numer domu*';
                        };
                     }
                     else{
                        label.textContent= 'linijka moze zawierac tylko liczby';
                        label.classList.add('warning');
                        let newObjValid = {
                            city: formValidate.city,
                            street: formValidate.street,
                            buld: false,
                            apart: formValidate.apart,
                        }
                        setFormValidate(newObjValid)
                        }
                    }
                }/>
                <label htmlFor="apartment">Numer mieszkania</label>
                <input className="input_solid" type="text" name="apartment" onChange={(e)=>{
                     let customerAparts;
                     let label = e.target.previousElementSibling;
                     let regulaExpression = /^\w{1,3}$/;
                        if(regulaExpression.test(e.target.value)){
                        customerAparts = e.target.value;
                        let newObj = {
                            city: adress.city,
                            street: adress.street,
                            buldNumb: adress.buldNumb,
                            apart: customerAparts,
                        };
                        setAdress(newObj); 
                        let newObjValid = {
                            city: formValidate.city,
                            street: formValidate.street,
                            buld: formValidate.buld,
                            apart: true,
                        };
                        setFormValidate(newObjValid);

                        if(label.classList.contains('warning')){
                            label.classList.remove('warning');
                            label.textContent='Numer mieszkania';
                        };
                     }
                     else{
                        label.textContent= 'linijka moze zawierac tylko liczby/znaki alfabetyczne lub zostaw pustą';
                        label.classList.add('warning');
                        let newObjValid = {
                            city: formValidate.city,
                            street: formValidate.street,
                            buld: formValidate.buld,
                            apart: false,
                        };
                        setFormValidate(newObjValid);
                    
                    }
                    }
                }/> 
                <button className="solid" onClick={(e)=>{
                        e.preventDefault();

                        function checkItem(item) {
                            return item === true ;
                          } 
                        if(Object.values(formValidate).every(checkItem)){
                            props.setModalWindow("deliverySecondWindow");
                        }else{
                            alert('należy wypelnić wszyskie pola wedlug poleceń')
                        }
                      
                    }
                }>Dalej</button>
            </form>
        )
    };

    function deliverySecondWindow() {

        function getDeliveryTime(){
            let nowTime = new Date()
            nowTime.setMinutes(nowTime.getMinutes()+20)

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

        return (
            <>
                <div className="adress">
                    <span>Twój adres dostawy:</span>
                    <span className='city'>{adress.city}</span>
                    <p className='street'>
                        <span>{adress.street}</span>
                        <span>{adress.buldNumb}</span>
                       {adress.apart.length>0?<span>/{adress.apart}</span>:null}
                    </p>
                </div>
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
                            <span>{getDeliveryTime()}</span>
                        </div>
                    </div>
                    <button onClick={(e)=>{

                        // const url = 'url backend';
                        // const data = adress;

                        // try {
                        // const response =  fetch(url, {
                        //     method: 'POST', 
                        //     body: JSON.stringify(data), 
                        //     headers: {
                        //     'Content-Type': 'application/json'
                        //     }
                        // });
                        // // const json =  response.json();
                        // // console.log('dane wyslano:', JSON.stringify(json));
                        // } catch (error) {
                        // console.error('error:', error);
                        // }
                        alert("Zamowienie zostalo zlozone. proszę czekać na zamówenie");
                        e.target.closest('.modal-window').classList.toggle('active')
                        props.setModalWindow();
                        props.setshowModalWindowDelivery(false);
                        

                    }}>Zamów z dostawą</button>
                    <button onClick={()=>{props.setModalWindow("delivery")}}>Wróć</button>
                  
                </div>
            </>
        )
    };

    


    function takeaway(params) {
        return(
            <>  
                <span >Wybierz najbliższy lokal Dominos:</span>
                <select name="citys" id="citys" ref={selectStore}>
                    <option value="lokal1">lokal1</option>
                    <option value="lokal2">lokal2</option>
                    <option value="lokal3">lokal3</option>
                    <option value="lokal4">lokal4</option>
                </select>
                <Link to="/pizza">
                    <button onClick={(e)=>{
                            e.target.closest('.modal-window').classList.toggle('active');
                            props.setModalWindow();
                            props.setshowModalWindowDelivery(false);
                            props.setStore(selectStore.current.value);
                        }
                    }>Potwierdzić</button>
                </Link>
            </>

        )
    }

   
   
    return (
        <>
            <div className="modal-window">
                <div className="window_top"> 
                    <span>Zamów online</span> 
                    <button className="solid" onClick={(e)=>{
                        e.target.closest('.modal-window').classList.toggle('active')
                        props.setModalWindow();
                        props.setshowModalWindowDelivery(false);
                    }}>X</button> 
                </div>
                { props.modalWindows.delivery?deliveryFirstWindow():null}
                { props.modalWindows.takeaway?takeaway():null}
                { props.modalWindows.deliverySecondWindow?deliverySecondWindow():null}

                
                
               
            </div>
           
    
            
        </>
    )


}

export default ModalWindow