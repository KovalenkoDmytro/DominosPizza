import logo from './logo.svg';

import Header from './Components/Header';
import Nav from './Components/Navigation';



let navList = ['home','sale','handbags','wallets','accessories','mens store','shoes','vintage','services','contact us'];



function App() {
  return (
    <div className="App">
      <header >
        <Header/>
        <Nav list={navList}/>
      </header>
    </div>
  );
}

export default App;
