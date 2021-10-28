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

  // let [countProducts, setCountProducts] = useState(0);


  useEffect(() => {
    if (localStorage.getItem("products") == null) {
      localStorage.setItem("products", '')
    } else {
      const products = localStorage.getItem("products") || [];
      setTotalPrice(JSON.parse(products))
    }


    // setCountProducts(
    //   JSON.parse(localStorage.getItem("products")).length
    // )

  }, [])


  useEffect(() => {
    crossOfPrice();
  }, [salePrice])


  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(totalPrice))
  }, [totalPrice])


  // useEffect(() => {
  // }, [countProducts])

  function crossOfPrice() {
    if (salePrice.length > 0) {
      document.querySelector('.total').classList.add('__cossOff');
    } else return
  }


  function addPrice(name, url, price, description, sort) {
    let product = {
      name,
      url,
      price,
      description,
      sort,
    }
    setTotalPrice([...totalPrice, product])
    // setCountProducts(totalPrice.length)
  }

  function delProductFromBasket(delProduct) {
    let newProducts = totalPrice.filter(elem => elem.name !== delProduct);
    setTotalPrice(newProducts)
  }


  function returnTotalprice(totalPrice) {
    let count = 0
    totalPrice.forEach(element => {
      count += element.price
    });
    return (count.toFixed(2))
  }


  // add sale-price and check coupon
  function changeTotalPrice(saleValue, Pizzas, article) {
    let count = 0
    let countPizzas = 0
    totalPrice.forEach(element => {
      count += element.price;
      countPizzas += 1;
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