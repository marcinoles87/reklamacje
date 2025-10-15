import { useState } from 'react';
import './App.css';
import DaneFirmy from './components/DaneFirmy';
import DaneProduktu from './components/DaneProduktu';
import DaneZglaszajacego from './components/DaneZglaszajacego';

function App() {

  const [daneFirmy , setDaneFirmy] = useState('')
  const [daneZglaszajacego , setDaneZglaszajacego] = useState('')
  const [emailZglaszajacego , setEmailZglaszajacego] = useState('')
  const [towar , setTowar] = useState('')
  const [zgloszenie , setZgloszenie] = useState('')
  const [żadanie , setŻadanie] = useState('')
  const [filia , setFilia] = useState('')
  const [paragon , setParagon ] = useState('')
  const [sprzedawca , setSprzedawca] = useState('')
  const [kod , setKod] = useState('')
  const [nazwa , setNazwa] = useState('')
  const [opis , setOpis] = useState('')



  return (
    <div className="App">
      <h1>Wniosek do zgłoszenia reklamacyjnego</h1>

      <DaneFirmy filia={filia} setFilia={setFilia} paragon={paragon} setParagon={setParagon} sprzedawca={sprzedawca} setSprzedawca={setSprzedawca}></DaneFirmy>
      <DaneZglaszajacego setDaneZglaszajacego={setDaneZglaszajacego} setEmailZglaszajacego={setEmailZglaszajacego}></DaneZglaszajacego>

      <div className='dane-reklamacji'>
              <DaneProduktu setKod={setKod} setNazwa={setNazwa} setOpis={setOpis}></DaneProduktu>

      </div>



      <div className='sprawdzdenie'>
        <p>Filia :{filia}</p>
        <p>Paragon : {paragon}</p>
        <p>Sporządził : {sprzedawca}</p>
        <p>Kod : {kod}</p>
        <p>Nazwa : {nazwa}</p>
        <p>Opis wady : {opis}</p>
      </div>
      
      
    </div>
  );
}

export default App;
