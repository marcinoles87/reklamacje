import { useState } from 'react';
import './App.css';
import DaneFirmy from './components/DaneFirmy';
import DaneProduktu from './components/DaneProduktu';
import DaneZglaszajacego from './components/DaneZglaszajacego';

import logo from './components/img/logoMp.jpg'

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
  const [tel , setTelefon] = useState('')
  const [wyglad , setWyglad] = useState('')
  const [zakup , setZakup] = useState('')




  const handleSend = () => {

    console.log(tel)
    alert(`
      
      Twoje zgłoszenie reklamacyjne zostało wysłane ! mamy 14 dni na rozpatrzenie , prosimy o cierpliwość .

      Filia : ${filia}
      Podpisał : ${sprzedawca}

      Osoba zglaszająca : ${daneZglaszajacego}
      Email : ${emailZglaszajacego} / Telefon : ${tel}
      Opis reklamacji : ${opis}
      Opis oddanego przedmiotu : ${wyglad}


      `)
  }

  return (
    <div className="App">

      <div className='dane'>
      <img src={logo} alt=""></img>
      <h3>FORMULARZ REKLMACYJNY</h3>
      <p>Prosimy o wypełnienie wszystkich wymaganych pól. </p>
      <p>Produkt powinien być względnie wyczyszczony , bez resztek jedzenia / napojów .</p>
      </div>


  
              <DaneFirmy filia={filia} setFilia={setFilia} paragon={paragon} setParagon={setParagon} sprzedawca={sprzedawca} setSprzedawca={setSprzedawca}></DaneFirmy>
              <DaneZglaszajacego setDaneZglaszajacego={setDaneZglaszajacego} setEmailZglaszajacego={setEmailZglaszajacego} setTelefon={setTelefon}></DaneZglaszajacego>
              <DaneProduktu setKod={setKod} setNazwa={setNazwa} setOpis={setOpis} setWyglad={setWyglad} setZakup={setZakup}></DaneProduktu>

              <button onClick={handleSend}>Wyślij zgłoszenie</button>

    

     


{/* 
      <div className='sprawdzdenie'>
        <p>Filia :{filia}</p>
        <p>Paragon : {paragon}</p>
        <p>Sporządził : {sprzedawca}</p>
        <p>Kod : {kod}</p>
        <p>Nazwa : {nazwa}</p>
        <p>Opis wady : {opis}</p>
      </div> */}
      
      
    </div>
  );
}

export default App;
