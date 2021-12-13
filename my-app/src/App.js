import React from 'react';
import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Context from './Context';
import { useState, useEffect } from 'react';
import ModalWindow from './pages/ModalWindow/ModalWindow';
import TimePicker from './pages/TimePicker/TimePicker';


function App() {

  let [totalPrice, setTotalPrice] = useState([]);
  let [salePrice, setSalePrice] = useState([]);
  let [showModalWindow, setShowModalWindowDelivery] = useState(false);
  let [modalWindows, setmodalWindows] = useState({takeaway: false,delivery: false,deliverySecondWindow: false, chooseLokal: false,});
  let [choosedStore, setStore] = useState('');
  let [productsCounterInBasket, setProductsCounter] = useState(0);
  let [collectTime, setCollectTime] = useState({
    hours : null,
    minutes : null,
  });
  let [showModalcollectTime, setShowModalcollectTime] = useState(false);

 

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
    if(showModalWindow){
      document.querySelector('.modal-window').classList.add('active');
    }
  }, [showModalWindow]);

  
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(totalPrice))
  }, [totalPrice]);

  useEffect(() => {
   
  }, [modalWindows]);

  useEffect(()=>{
  },[choosedStore]);

  useEffect(()=>{
    console.log(productsCounterInBasket);
  },[productsCounterInBasket]);
  
  useEffect(()=>{
    setProductsCounter(Number(localStorage.getItem('productsCounterInBasket')))
  },[]);

  function crossOfPrice() {
    if (salePrice.length > 0) {
      document.querySelector('.total').classList.add('__cossOff');
    } else return
  };

//add products to count in basket 
  function cheackAndAddToCount(count){
    if(localStorage.getItem('productsCounterInBasket')==null){
      localStorage.setItem('productsCounterInBasket', count);
      setProductsCounter(count);
    }else{
      let countInBasket = Number(localStorage.getItem('productsCounterInBasket'));
      localStorage.setItem('productsCounterInBasket', countInBasket + count)  
      setProductsCounter(countInBasket + count);
    } 
  }

 //remove products from count in basket 
 function removeProductfromBasketCounter(productCount = 1 ){

  if(localStorage.getItem('productsCounterInBasket')==null){
    return
  }else{
    let countInBasket = Number(localStorage.getItem('productsCounterInBasket'));
    localStorage.setItem('productsCounterInBasket', countInBasket - productCount);
    setProductsCounter(productsCounterInBasket - productCount)  
  } 
} 


//add product to basket
  function addPrice(name, url, price, description, sort,count) {
    let product = {
      name,
      url,
      price,
      description,
      sort,
      count,
    }

    totalPrice.forEach((element,index) => {
      if(element.name === product.name){
        totalPrice[index]=element;     
        totalPrice.splice(index, 1);
        product.count +=element.count
       
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
      count +=  (element.count * element.price)
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
  function setshowModalWindow(windowItem){
    setShowModalWindowDelivery(true)
    if(windowItem==="takeaway"){
      setmodalWindows(
        {takeaway: true,
          delivery: false,
          deliverySecondWindow: false,
          chooseLokal: false,
        }
      )
    }else if(windowItem==="delivery"){
      setmodalWindows(
        {takeaway: false,
          delivery: true,
          deliverySecondWindow: false,
          chooseLokal: false,
        }
      )
    }else if(windowItem==="deliverySecondWindow"){
      setmodalWindows(
        {takeaway: false,
          delivery: false,
          deliverySecondWindow: true,
          chooseLokal: false,
        }
      )
    }else if(windowItem==="choose lokal"){
      setmodalWindows(
        {takeaway: false,
          delivery: false,
          deliverySecondWindow:false,
          chooseLokal: true,
        }
      )
    }
    else(
      setmodalWindows(
        {takeaway: false,
          delivery: false,
          deliverySecondWindow: false,
          chooseLokal: false,
        }
      )
    )
 
  };

  return (
    < Context.Provider value={[addPrice, changeTotalPrice, cheackAndAddToCount]} >
      <Header totalPrice={returnTotalprice(totalPrice)} salePrice={salePrice} getStoreTakeAway={choosedStore}/>  
      <Navigation products={totalPrice} delProduct={delProductFromBasket} setModalWindow={setshowModalWindow} totalPrice={returnTotalprice(totalPrice)}  salePrice={salePrice} productsCounterInBasket={productsCounterInBasket} getStoreTakeAway={choosedStore}/>
      <Footer />
      {showModalWindow? <ModalWindow setModalWindow={setshowModalWindow} modalWindows={modalWindows} showSecondDeliveryWindow={setshowModalWindow} setshowModalWindowDelivery={setShowModalWindowDelivery} setStore={setStore} getStoreTakeAway={choosedStore} setCollectTime={setCollectTime} setShowModalcollectTime={setShowModalcollectTime} collectTime={collectTime}/>:null}
      {showModalcollectTime?  <TimePicker setCollectTime={setCollectTime} setShowModalcollectTime={setShowModalcollectTime}/>: null}
    </Context.Provider>
  );
}

export default App;