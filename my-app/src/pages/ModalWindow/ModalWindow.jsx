import './ModalWindow.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function ModalWindow(props) {

    let choosedPremises = props.getStoreTakeAway;

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

    function deliveryFirstWindow() {
        return (
            <form className="deliveryFirstWindow" >
                <label htmlFor="city">Miasto*</label>
                <input className="input_solid" type="text" name="city" onChange={(e) => {
                    let customerAdress
                    let label = e.target.previousElementSibling;
                    let regulaExpression = /^[a-zA-Z]+$/
                    if (regulaExpression.test(e.target.value)) {
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


                        if (label.classList.contains('warning')) {
                            label.classList.remove('warning');
                            label.textContent = 'Miasto*';
                        };
                    }
                    else {
                        label.textContent = 'linijka moze zawierac tylko znaki alfabetyczne';
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
                } />
                <label htmlFor="street">Ulica*</label>
                <input className="input_solid" type="text" name="street" onChange={(e) => {
                    let customerStreet;
                    let label = e.target.previousElementSibling;
                    let regulaExpression = /^[a-zA-Z]+$/;
                    if (regulaExpression.test(e.target.value)) {
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


                        if (label.classList.contains('warning')) {
                            label.classList.remove('warning');
                            label.textContent = 'Ulica*';
                        };
                    }
                    else {
                        label.textContent = 'linijka moze zawierac tylko znaki alfabetyczne lub ';
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
                } />
                <label htmlFor="">Numer domu*</label>
                <input className="input_solid" type="text" name="build" onChange={(e) => {
                    let customerBuild;
                    let label = e.target.previousElementSibling;
                    let regulaExpression = /^[0-9]+$/;
                    if (regulaExpression.test(e.target.value)) {
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

                        if (label.classList.contains('warning')) {
                            label.classList.remove('warning');
                            label.textContent = 'Numer domu*';
                        };
                    }
                    else {
                        label.textContent = 'linijka moze zawierac tylko liczby';
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
                } />
                <label htmlFor="apartment">Numer mieszkania</label>
                <input className="input_solid" type="text" name="apartment" onChange={(e) => {
                    let customerAparts;
                    let label = e.target.previousElementSibling;
                    let regulaExpression = /^\w{1,3}$/;
                    if (regulaExpression.test(e.target.value)) {
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

                        if (label.classList.contains('warning')) {
                            label.classList.remove('warning');
                            label.textContent = 'Numer mieszkania';
                        };
                    }
                    else {
                        label.textContent = 'linijka moze zawierac tylko liczby/znaki alfabetyczne lub zostaw pustą';
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
                } />
                <button className="solid" onClick={(e) => {
                    e.preventDefault();

                    function checkItem(item) {
                        return item === true;
                    }
                    if (Object.values(formValidate).every(checkItem)) {
                        props.setModalWindow("deliverySecondWindow");
                        props.setUserData(
                            adress
                        )
                    } else {
                        alert('należy wypelnić wszyskie pola wedlug poleceń')
                    }

                }
                }>Dalej</button>
            </form>
        )
    };

    function deliverySecondWindow() {



        return (
            <>
                <div className="adress">
                    <span>Twój adres dostawy:</span>
                    <span className='city'>{adress.city}</span>
                    <p className='street'>
                        <span>{adress.street}</span>
                        <span>{adress.buldNumb}</span>
                        {adress.apart.length > 0 ? <span>/{adress.apart}</span> : null}
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
                            <span>{props.collectTime[1].delivery.hours} : {props.collectTime[1].delivery.minutes} </span>
                        </div>
             
                            <button onClick={(e) => {
                                props.setShowModalcollectTime(true);

                                // props.setCollectTime([
                                //     {
                                //         takeaway: {
                                //           hours: hoursInput.current.value,
                                //           minutes: minutesInput.current.value,
                                //         }
                                //       }
                                //       , {
                                //         delivery: {
                                //           hours: new Date().getHours(),
                                //           minutes: new Date().getMinutes(),
                                //         }
                                //       }
                                // ])
                            }}>Zmienić czas dostawy</button>
                       
                    </div>
                    <Link to="/pizza"><button onClick={(e) => {

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
                        e.target.closest('.modal-window').classList.toggle('active')
                        props.setModalWindow();
                        props.setshowModalWindowDelivery(false);
                        props.setChoosedDelivery(true);

                    }}>Podtwierdzam</button></Link>
                    <button className='solid' onClick={() => { props.setModalWindow("delivery") }}>Wróć</button>

                </div>
            </>
        )
    };

    function takeaway(params) {
        return (
            <div className="takeAway">
                <label htmlFor="citys">Wybierz najbliższy lokal Dominos:</label>
                <select name="citys" id="citys" onChange={(e) => {
                    props.setStore(e.target.value);
                }}>
                    <option value="lokal1">lokal1</option>
                    <option value="lokal2">lokal2</option>
                    <option value="lokal3">lokal3</option>
                    <option value="lokal4">lokal4</option>
                </select>
                <Link to="/pizza">
                    <button className='solid' onClick={(e) => {
                        e.target.closest('.modal-window').classList.toggle('active');
                        props.setModalWindow();
                        props.setshowModalWindowDelivery(false);
                    }
                    }>Potwierdzić</button>
                </Link>
            </div>

        )
    }


    function chooseLokal() {
        return (

            <div className="chooseLokal">
                <span>{choosedPremises ? `Tój lokal odbioru to:${choosedPremises}` : 'lokal odbioru nie jest wybrany'} </span>
                <div className="changeLocal">
                    <span >{choosedPremises ? 'Zmienić lokal odbioru' : 'proszę wybrać lokal'}:</span>
                    <select name="citys" id="citys" onChange={(e) => {
                        props.setStore(e.target.value);
                    }}>
                        <option value="lokal1">lokal1</option>
                        <option value="lokal2">lokal2</option>
                        <option value="lokal3">lokal3</option>
                        <option value="lokal4">lokal4</option>
                    </select>
                </div>
                <button onClick={(e) => {
                    props.setShowModalcollectTime(true);
                }}>Zmienic czas odbioru</button>
                <span>Zapraszamy po odbioru o godzinie {props.collectTime[0].takeaway.hours}: {props.collectTime[0].takeaway.minutes}</span>
                <button className='solid' onClick={(e) => {
                    e.target.closest('.modal-window').classList.toggle('active');
                    props.setModalWindow();
                    props.setshowModalWindowDelivery(false);
                    alert(`dziękujemy za złożone zamówienie`)
                }
                }>Potwierdzam</button>

            </div>

        )
    }


    return (
        <div className="modal-window">
            <div className="window_top">
                <span>Zamów online</span>
                <button className="solid window__close" onClick={(e) => {
                    e.target.closest('.modal-window').classList.toggle('active')
                    props.setModalWindow();
                    props.setshowModalWindowDelivery(false);
                }}>X</button>
            </div>
            {props.modalWindows.delivery ? deliveryFirstWindow() : null}
            {props.modalWindows.takeaway ? takeaway() : null}
            {props.modalWindows.deliverySecondWindow ? deliverySecondWindow() : null}
            {props.modalWindows.chooseLokal ? chooseLokal() : null}

        </div>

    )


}

export default ModalWindow