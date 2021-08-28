import logo from './logo.svg';

import Header from './Components/Header';
import Nav from './Components/Navigation';
import Footer from './Components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainBanner from './Components/MainBanner';
import Content from './Components/Content';

import './Styles/Main.scss';
import products from './products.json';

let navList = ['home','sale','handbags','wallets','accessories','mens store','shoes','vintage','services','contact us'];
let footerList = ['Alexis Hudson','American Apparel','Ben Sherman','Big Buddha','Chanel','Christian Audigier','Coach','Cole Haan'];
let footerTitles = ['featured sale', 'mens store', 'woomen store', 'quick links'];





function App() {
  return (
    <div className="App">
      <header >
        <Header/>
        <Nav list={navList}/>
      </header>
      <section className='banner'>
        <MainBanner/>
      </section>
      <section className='layout'>
        <Content cards={products}/>
      </section>
      <footer>
        <Footer list ={footerList} titles={footerTitles}/>
      </footer>
    </div>
  );
}

export default App;
