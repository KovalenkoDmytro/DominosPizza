import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Context from './Context';
import { useState, useEffect } from 'react';

function App() {

  let [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("products") == null) {
      localStorage.setItem("products", '')
    } else {
      const products = localStorage.getItem("products") || [];
      setTotalPrice(JSON.parse(products))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(totalPrice))
  }, [totalPrice])


  function addPrice(name, url, price, description, sort) {
    let product = {
      name,
      url,
      price,
      description,
      sort,
    }
    setTotalPrice([...totalPrice, product])
  }

  function delProductFromBasket(delProduct){
    let newProducts =   totalPrice.filter(elem => elem.name !== delProduct );
    setTotalPrice(newProducts)
}


  function returnTotalprice(totalPrice) {
    let count = 0
    totalPrice.forEach(element => {
      count += element.price
    });
    return (count.toFixed(2))
  }


  return (
    <Context.Provider value={addPrice}>
      <Header totalPrice={returnTotalprice(totalPrice)} />
      <Navigation  products ={totalPrice} delProduct={delProductFromBasket} />
      <Footer />
    </Context.Provider>
  );
}

export default App;
