import logo from './logo.svg';

import Header from './Components/Header';
import Nav from './Components/Navigation';
import Footer from './Components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainBanner from './Components/MainBanner';


import './Styles/Main.scss';
import products from './products.json';

import Content from './Components/Content';
import React, { useState } from 'react';
let navList = ['home','sale','handbags','wallets','accessories','mens store','shoes','vintage','services','contact us'];
let footerList = ['Alexis Hudson','American Apparel','Ben Sherman','Big Buddha','Chanel','Christian Audigier','Coach','Cole Haan'];
let footerTitles = ['featured sale', 'mens store', 'woomen store', 'quick links'];




function App() {
 
  const [basket, setPriceInBasket] = useState(0);
  const [currency, setCurrency]= useState('dolars');
  function changeHandel(a){
    setPriceInBasket(basket + a);
  }
  function changeCurrency(currency){
    setCurrency(currency)
  }

  return (

    
    <div className="App">
      <header >
        <Header coast ={basket} changeCurrency={changeCurrency} currency={currency} />
        <Nav list={navList}/>
      {/* <button className='btn small' onClick={()=>{AddToBasket(2)}}>buy now</button> */}
      </header>
      <section className='banner'>
        <MainBanner/>
      </section>
      <section className='layout'>
        <Content cards={products}  changeHandel={changeHandel} currency={currency}/>
      </section>
      <footer>
        <Footer list ={footerList} titles={footerTitles}/>
      </footer>
    </div>
  );
}

export default App;
