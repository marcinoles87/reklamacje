import { useEffect, useState } from 'react';
import axios from 'axios'
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
  const [zadanie, setZadanie] = useState('')
  const [numerReklamacji , setNumer] = useState(0)

  const [wszystkieDaneBazy , setDane] = useState([])
 

  const setReklamacja = () => {
   
    setNumer( (prev) => {
      return prev+1
    })
  }

  useEffect( () => {

    console.log('pierwszy effect')

    axios.get('http://localhost:8081')
    .then( res => {
      console.log(res.data)
      
    
    })
    .catch( err => console.log(err)
    )
  })
  

  const handleSend = () => {

    axios.get('http://localhost:8081')
    .then( res => {
      console.log(res)
      console.log(res.data)
            setDane(res.data)
    })
    .catch( err => console.log(err)
    )

    setReklamacja()


    alert(`
      
      Twoje zgłoszenie reklamacyjne zostało wysłane ! mamy 14 dni na rozpatrzenie , prosimy o cierpliwość .

      Filia : ${filia}
      Podpisał : ${sprzedawca}

      Osoba zglaszająca : ${daneZglaszajacego}
      Email : ${emailZglaszajacego} / Telefon : ${tel}
      Opis reklamacji : ${opis}
      Opis oddanego przedmiotu : ${wyglad}
      Żądanie nabywcy : ${zadanie}


      `)
  }

  const handleUpdate = () =>{

    axios.post('http://localhost:8081' , 
        {
        Filia : filia ,
        Podpisał : sprzedawca ,
        OsobaZgłaszajaca : daneZglaszajacego ,
        Email : emailZglaszajacego,
        OpisReklamacji : opis,
        DataSprzedazy : zakup,
        Nazwa : nazwa ,
        Opis : opis ,
        })
      .then( () =>{
        alert('succes');
      })
    
    
    
  }

  const handleDelete = async (item) =>{

    axios.delete(`http://localhost:8081/delete/${item}`)
    //   {
    //     data : 
    //     {
    //        Nazwa : item.Nazwa ,
    //     }
    //   }
    // )

    console.log(item)
    console.log('jestem w srodku delete')
  }

  return (
    <div className="App">

      <div className='dane'>
      <img src={logo} alt=""></img>
      <h3>FORMULARZ REKLMACYJNY</h3>
      <p>Prosimy o wypełnienie wszystkich wymaganych pól. </p>
      <p>Produkt powinien być względnie wyczyszczony , bez resztek jedzenia / napojów .</p>
      <p>Reklamacja nr : {numerReklamacji} </p>
      </div>


  
              <DaneFirmy filia={filia} setFilia={setFilia} paragon={paragon} setParagon={setParagon} sprzedawca={sprzedawca} setSprzedawca={setSprzedawca}></DaneFirmy>
              <DaneZglaszajacego setDaneZglaszajacego={setDaneZglaszajacego} setEmailZglaszajacego={setEmailZglaszajacego} setTelefon={setTelefon} setZadanie={setZadanie}></DaneZglaszajacego>
              <DaneProduktu setKod={setKod} setNazwa={setNazwa} setOpis={setOpis} setWyglad={setWyglad} setZakup={setZakup}></DaneProduktu>

              <button onClick={handleSend}>Wyślij zgłoszenie</button>
              <button onClick={handleUpdate}>Zaktualizuj</button>

              <div>
                <h1>Wszystkie reklamacje</h1>
                {wszystkieDaneBazy.map( (item,index) =>{
                  return(
                    <div className='dane-container' key={index}>
                      
                      <p>Nazwa : {item.Nazwa}</p>
                      <p>Data : {item.Data}</p>
                      <p>Opis : {item.Opis}</p>
                      <p>Cena: {item.Cena}</p>
                      <p>Filia : {item.Filia}</p>
                      <p>Opis reklamacji : {item.OpisReklamacji}</p>

                      <button onClick={ () => handleDelete(item.Nazwa)}>Delete document</button>
                    
                    </div>
                  )
                })}
              </div>


      
      
    </div>
  );
}

export default App;
