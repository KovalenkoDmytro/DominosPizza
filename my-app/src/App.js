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


  function addPrice(name, url, price) {
    let product = {
      name: name,
      photo: url,
      price: price
    }
    setTotalPrice([...totalPrice, product])
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
      <Navigation />
      <Footer />
    </Context.Provider>
  );
}

export default App;
