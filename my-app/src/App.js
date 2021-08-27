import logo from './logo.svg';

import Header from './Components/Header';
import Nav from './Components/Navigation';
import Footer from './Components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainBanner from './Components/MainBanner';
import Content from './Components/Content';

import './Styles/Main.scss'

let navList = ['home','sale','handbags','wallets','accessories','mens store','shoes','vintage','services','contact us'];
let footerList = ['Alexis Hudson','American Apparel','Ben Sherman','Big Buddha','Chanel','Christian Audigier','Coach','Cole Haan'];
let footerTitles = ['featured sale', 'mens store', 'woomen store', 'quick links'];

let cards =[
  {
    img: 'https://blog.technavio.com/wp-content/uploads/2018/10/shoe-companies.jpg',
    title: 'Branded shoes',
    price: 200
  },
  {
    img: 'https://ae01.alicdn.com/kf/HTB1XIblXQ9E3KVjSZFrq6y0UVXaR/DAYIFUN-brand-women-Clothing-Slim-Fitness-t-shirt-LONDON-print-T-shirts-Casual-T-Shirts-Skateboard.jpg_Q90.jpg_.webp',
    title: 'Branded tees',
    price: 26
  },
  {
    img: 'https://image.ceneostatic.pl/data/products/94839352/i-adidas-jr-branded-t-shirt-365-rozmiar-140cm.jpg',
    title: 'Branded thirt',
    price: 25
  },
  {
    img: 'https://ae01.alicdn.com/kf/H28bc4c2abdac4f87bbcf858a7ac134c0Z/Men-wallets-Genuine-Leather-Wallets-Men-Short-Wallet-Business-Brand-Leather-Card-Holder-Money-Cash-Wallet.jpg_Q90.jpg_.webp',
    title: 'Branded walet',
    price: 55
  },
  {
    img: 'https://assets.afcdn.com/story/20150305/608646_w600h600cx300cy300.jpg',
    title: 'Branded women bag',
    price: 778
  },
  {
    img: 'https://i.pinimg.com/originals/ec/9c/ff/ec9cffa040a85fd1a4e7e58d052938f3.jpg',
    title: 'Branded cargo pants',
    price: 150
  }
]




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
        <Content cards={cards}/>
      </section>
      <footer>
        <Footer list ={footerList} titles={footerTitles}/>
      </footer>
    </div>
  );
}

export default App;
