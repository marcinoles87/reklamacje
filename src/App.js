import { useState } from 'react';
import './App.css';
import DaneFirmy from './components/DaneFirmy';

function App() {

  const [daneFirmy , setDaneFirmy] = useState('')
  const [daneZglaszajacego , setDaneZglaszajacego] = useState('')
  const [towar , setTowar] = useState('')
  const [zgloszenie , setZgloszenie] = useState('')
  const [żadanie , setŻadanie] = useState('')
  const [filia , setFilia] = useState('')
  const [paragon , setParagon ] = useState('')
  const [sprzedawca , setSprzedawca] = useState('')



  return (
    <div className="App">
      <h1>Wniosek do zgłoszenia reklamacyjnego</h1>

      <DaneFirmy filia={filia} setFilia={setFilia} paragon={paragon} setParagon={setParagon} sprzedawca={sprzedawca} setSprzedawca={setSprzedawca}></DaneFirmy>

      <div className='sprawdzdenie'>
        <p>Filia :{filia}</p>
        <p>Paragon : {paragon}</p>
        <p>Sprzedający : {sprzedawca}</p>
      </div>
      
      
    </div>
  );
}

export default App;
