import logo from './logo.svg';
import './App.css';
import playerData from '../src/fakeData/fakeData.json'
import { useEffect, useState } from 'react';
import './components/Player/Player'
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  const [info,setInfo] = useState([]);
  useEffect(() => {
    setPlayers(playerData);
    console.log(playerData);
  }, [])
  const handleAddPlayer = (player) => {
    console.log('clicked', player);
    if(cart.indexOf(player)===-1){
    const newCart = [...cart, player];
    setCart(newCart);
    }
    // const newCart = [...cart, player];
    // setCart(newCart);
    const newInfo = [...info,player];
    setInfo(newInfo);

  }
  return (
    <div className="main-container ">
      <div className="col-8 player-container">
        <ul>
          {
            players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id} ></Player>)
          }
        </ul>
      </div>
      <div className='cart '>
        {/* <h4>Player Loaded: {players.length}</h4> */}
        <h4> Player Added : {cart.length}</h4>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
