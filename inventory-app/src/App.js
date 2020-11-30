import Inventory from './Inventory';
import './App.css';

function App() {
  return (
    <div className="header">
      <header className="App-header">
        <h1>One World Spices Inventory </h1> 
      </header>
      <Inventory itemName= "Cumin Seeds"  count= "100"  price= "18.99"/>
      <Inventory itemName= "Coriander Seeds"  count= "200"  price= "20.99"/>
      <Inventory itemName= "Green Cardamon"  count= "100"  price= "28.99"/>
      <Inventory itemName= "Black Cardamon"  count= "300"  price= "34.99"/>
      <Inventory itemName= "Star Anise"  count= "250"  price= "31.99"/>




    </div>

  );
}

export default App;
