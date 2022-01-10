import React from 'react';
import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Context from './Context';
import { useState, useEffect } from 'react';
import ModalWindow from './pages/ModalWindow/ModalWindow';
import TimePicker from './pages/TimePicker/TimePicker';
import coupons from './coupons.json';

function App() {

  let [totalPrice, setTotalPrice] = useState([]);
  let [salePrice, setSalePrice] = useState([]);
  let [showModalWindow, setShowModalWindowDelivery] = useState(false);
  let [modalWindows, setmodalWindows] = useState({ takeaway: false, delivery: false, deliverySecondWindow: false, chooseLokal: false, addres: false });
  let [choosedStore, setStore] = useState(false);
  let [productsCounterInBasket, setProductsCounter] = useState(0);
  let [userData, setUserData] = useState({});
  let [choosedDelivery, setChoosedDelivery] = useState(false);
  let [couponsCount, setCouponsCount] = useState(coupons.length);
  let [collectTime, setCollectTime] = useState([
    {
      takeaway: {
        hours: getTime(15, 'hours'),
        minutes: getTime(15, 'minutes'),
      }
    }
    , {
      delivery: {
        hours: getTime(30, 'hours'),
        minutes: getTime(30, 'minutes'),
      }
    }


  ]);
  let [showModalcollectTime, setShowModalcollectTime] = useState(false);


  function getTime(time, timeItem) {
    let nowTime = new Date()
    nowTime.setMinutes(nowTime.getMinutes() + time)

    let hours = nowTime.getHours()
    let minutes = nowTime.getMinutes()
    if (minutes < 10) {
      minutes = `0${nowTime.getMinutes()}`
    }
    if (hours < 10) {
      hours = `0${nowTime.getHours()}`
    }

    if (timeItem === "hours") { return hours }
    else { return minutes }
  };

  useEffect(() => {
    if (localStorage.getItem("products") == null) {
      localStorage.setItem("products", '')
    } else {
      const products = localStorage.getItem("products") || [];
      setTotalPrice(JSON.parse(products))
    }
  }, []);

  useEffect(() => {
    crossOfPrice();
  }, [salePrice]);

  useEffect(() => {
    if (showModalWindow) {
      document.querySelector('.modal-window').classList.add('active');
    }
  }, [showModalWindow]);


  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(totalPrice))
  }, [totalPrice]);

  useEffect(() => {

  }, [modalWindows]);

  useEffect(() => {
  }, [choosedStore]);

  useEffect(() => {
  }, [productsCounterInBasket]);

  useEffect(() => {
  }, [userData]);


  useEffect(() => {
    setProductsCounter(Number(localStorage.getItem('productsCounterInBasket')))
  }, []);

  function crossOfPrice() {
    if (salePrice.length > 0) {
      document.querySelector('.total').classList.add('__cossOff');
    } else return
  };

  //add products to count in basket 
  function cheackAndAddToCount(count) {
    if (localStorage.getItem('productsCounterInBasket') == null) {
      localStorage.setItem('productsCounterInBasket', count);
      setProductsCounter(count);
    } else {
      let countInBasket = Number(localStorage.getItem('productsCounterInBasket'));
      localStorage.setItem('productsCounterInBasket', countInBasket + count)
      setProductsCounter(countInBasket + count);
    }
  }

  //remove products from count in basket 
  function removeProductfromBasketCounter(productCount = 1) {

    if (localStorage.getItem('productsCounterInBasket') == null) {
      return
    } else {
      let countInBasket = Number(localStorage.getItem('productsCounterInBasket'));
      localStorage.setItem('productsCounterInBasket', countInBasket - productCount);
      setProductsCounter(productsCounterInBasket - productCount)
    }
  }


  //add product to basket
  function addPrice(name, url, price, description, sort, count) {
    let product = {
      name,
      url,
      price,
      description,
      sort,
      count,
    }

    totalPrice.forEach((element, index) => {
      if (element.name === product.name) {
        totalPrice[index] = element;
        totalPrice.splice(index, 1);
        product.count += element.count

      }
    });

    setTotalPrice([...totalPrice, product])
  };
  // del product from basket 
  function delProductFromBasket(delProduct, productCount) {
    let newProducts = totalPrice.filter(elem => elem.name.toUpperCase() !== delProduct.toUpperCase());
    setTotalPrice(newProducts)
    removeProductfromBasketCounter(productCount)
  };

  // sum price
  function returnTotalprice(totalPrice) {
    let count = 0
    totalPrice.forEach(element => {
      count += (element.count * element.price)
    });
    return count.toFixed(2)
  };

  // add sale-price and check coupon
  function changeTotalPrice(saleValue, Pizzas, article) {
    let count = 0
    let countPizzas = 0
    totalPrice.forEach(element => {
      count += element.price * element.count;
      countPizzas += element.count;
    });

    let newPrice = count - (count / 100) * saleValue;
    let SaleCoupon = {
      price: newPrice,
      coupon: article,
      count: Pizzas,
    }

    if (countPizzas >= Pizzas) {
      if (salePrice.length > 0) {
        salePrice.forEach(element => {
          if (element.coupon === SaleCoupon.coupon) {
            alert('kupon już zostal zrealizowany')
          } else {
            setSalePrice([SaleCoupon])
          }
        });
      } else { setSalePrice([SaleCoupon]) }
    } else (alert(`żeby zrealizować kupon należy dodać do koszyka jeszcie ${Pizzas - countPizzas} pizzy`))
  };

  //show DIALOG window DELIVERY
  function setshowModalWindow(windowItem) {
    setShowModalWindowDelivery(true)
    if (windowItem === "takeaway") {
      setmodalWindows(
        {
          takeaway: true,
          delivery: false,
          deliverySecondWindow: false,
          chooseLokal: false,
          addres: false,
        }
      )
    } else if (windowItem === "delivery") {
      setmodalWindows(
        {
          takeaway: false,
          delivery: true,
          deliverySecondWindow: false,
          chooseLokal: false,
          addres: false,
        }
      )
    } else if (windowItem === "deliverySecondWindow") {
      setmodalWindows(
        {
          takeaway: false,
          delivery: false,
          deliverySecondWindow: true,
          chooseLokal: false,
          addres: false,
        }
      )
    } else if (windowItem === "choose lokal") {
      setmodalWindows(
        {
          takeaway: false,
          delivery: false,
          deliverySecondWindow: false,
          chooseLokal: true,
          addres: false,
        }
      )
    } else if (windowItem === "adress") {
      setmodalWindows(
        {
          takeaway: false,
          delivery: false,
          deliverySecondWindow: false,
          chooseLokal: false,
          addres: true,
        }
      )
    } else (
      setmodalWindows(
        {
          takeaway: false,
          delivery: false,
          deliverySecondWindow: false,
          chooseLokal: false,
          addres: false
        }
      )
    )

  };


  // send Data to server 
  const sendDataToServer = async (data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`error in url 'https://jsonplaceholder.typicode.com/users', error status ${response.status}`)
    }
    return await response.json()
  }




  return (
    < Context.Provider value={[addPrice, changeTotalPrice, cheackAndAddToCount, coupons]} >
      <Header totalPrice={returnTotalprice(totalPrice)} salePrice={salePrice} getStoreTakeAway={choosedStore} />
      <Navigation products={totalPrice} delProduct={delProductFromBasket} setModalWindow={setshowModalWindow} totalPrice={returnTotalprice(totalPrice)} salePrice={salePrice} productsCounterInBasket={productsCounterInBasket} getStoreTakeAway={choosedStore} setShowModalcollectTime={setShowModalcollectTime} collectTime={collectTime} choosedDelivery={choosedDelivery} userData={userData} couponsCount={couponsCount} sendDataToServer={sendDataToServer}/>
      <Footer />
      {showModalWindow ? <ModalWindow setModalWindow={setshowModalWindow} modalWindows={modalWindows} showSecondDeliveryWindow={setshowModalWindow} setshowModalWindowDelivery={setShowModalWindowDelivery} setStore={setStore} getStoreTakeAway={choosedStore} setCollectTime={setCollectTime} setShowModalcollectTime={setShowModalcollectTime} collectTime={collectTime} setUserData={setUserData} setChoosedDelivery={setChoosedDelivery} sendDataToServer={sendDataToServer}/> : null}
      {showModalcollectTime ? <TimePicker setCollectTime={setCollectTime} setShowModalcollectTime={setShowModalcollectTime} /> : null}
    </Context.Provider>
  );
}

export default App;