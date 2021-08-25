import logo from './logo.svg';

import Header from './Components/Header';
import Nav from './Components/Navigation';
import Footer from './Components/Footer';
import './Styles/Main.scss'


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
      <footer>
        <Footer list ={footerList} titles={footerTitles}/>
      </footer>
    </div>
  );
}

export default App;
