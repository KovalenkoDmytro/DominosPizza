import React from 'react';
import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Context from './Context';
import { useState, useEffect } from 'react';
import ModalWindow from './pages/ModalWindow/ModalWindow';

function App() {

  let [totalPrice, setTotalPrice] = useState([]);
  let [salePrice, setSalePrice] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("products") == null) {
      localStorage.setItem("products", '')
    } else {
      const products = localStorage.getItem("products") || [];
      setTotalPrice(JSON.parse(products))
    }
  }, [])


  useEffect(() => {
    crossOfPrice();
  }, [salePrice])


  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(totalPrice))
  }, [totalPrice])



  function crossOfPrice() {
    if (salePrice.length > 0) {
      document.querySelector('.total').classList.add('__cossOff');
    } else return
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
  }
  // del product from basket 
  function delProductFromBasket(delProduct) {
    let newProducts = totalPrice.filter(elem => elem.name.toUpperCase() !== delProduct.toUpperCase());
    setTotalPrice(newProducts)
  }

  // sum price
  function returnTotalprice(totalPrice) {
    let count = 0
    totalPrice.forEach(element => {
      count +=  (element.count * element.price)
    });
    return count.toFixed(2)
  }


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
  }


  return (
    < Context.Provider value={[addPrice, changeTotalPrice]} >
      <Header totalPrice={returnTotalprice(totalPrice)} salePrice={salePrice} />  { /* countProducts={countProducts} */}
      <Navigation products={totalPrice} delProduct={delProductFromBasket} />
      <Footer />
      <ModalWindow/>
    </Context.Provider>
  );
}

export default App;