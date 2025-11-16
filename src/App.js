import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import DaneFirmy from './components/DaneFirmy';
import DaneProduktu from './components/DaneProduktu';
import DaneZglaszajacego from './components/DaneZglaszajacego';

import logo from './components/img/logoMp.jpg'

function App() {

  const [daneZglaszajacego , setDaneZglaszajacego] = useState('')
  const [emailZglaszajacego , setEmailZglaszajacego] = useState('')
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
  const [numerReklamacji , setNumerReklamacji] = useState(0)

  const [wszystkieDaneBazy , setDane] = useState([])

  const [filter , setFilter] = useState('');

  
 const handleFilter = () =>{
  
  console.log(wszystkieDaneBazy)
  const wyselekcjonowaneDane = [...wszystkieDaneBazy];
  const nowa = wyselekcjonowaneDane.filter( item => item.Filia.includes(filter))
  setDane(nowa)

}

  const setReklamacja = () => {
   
    setNumerReklamacji( (prev) => {
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
  

  const handleShow = () => {


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

  const dataDzis = new Date(); 
  const dzien = dataDzis.getDate();
  const miesiac = dataDzis.getDate();
  const rok = dataDzis.getFullYear();

  const dataSporzadzenia = `${dzien}-${miesiac}-${rok}`

  console.log(dataSporzadzenia)

  console.log('jestem w srodku')
  console.log(filia,sprzedawca,zadanie,kod,zakup)

  axios.post('http://localhost:8081/reklamacje' , 
        {
        Filia : filia ,
        Podpisał : sprzedawca ,
        OsobaZgłaszajaca : daneZglaszajacego ,
        Email : emailZglaszajacego,
        OpisReklamacji : opis,
        Nazwa : nazwa ,
        Żadanie : zadanie ,
        Kod : kod ,
        Zakup : zakup ,
        DataSporzadzenia : dataSporzadzenia ,
        Paragon : paragon ,
        Telefon : tel ,
        Wyglad : wyglad ,
        NumerReklamacji : numerReklamacji,
        

        }).then( () =>{
        alert('succes');
      })
    
    
    
  }

  const handleDelete = async (item) =>{


    console.log(item)

    axios.delete(`http://localhost:8081/delete/${item}`)
    
    setDane(wszystkieDaneBazy.filter( (val) =>{
      return item !== val.Nazwa
    }))

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

              <button onClick={handleShow}>Pokaż zgłoszenia</button>
              <button onClick={handleUpdate}>Dodaj zgłoszenie</button>

              <div>
                <h1>Wszystkie reklamacje</h1>
                <div className='filter-container'>
                  <label>Filia
                    <input onChange={ (e) => setFilter(e.target.value)}></input>
                  </label>

                  <label>Data sprzedaży
                    <input onChange={ (e) => setFilter(e.target.value)}></input>
                  </label>

                  <label>Sporządził
                    <input onChange={ (e) => setFilter(e.target.value)}></input>
                  </label>

                  <button onClick={handleFilter}>Znajdz</button>
                </div>
                {wszystkieDaneBazy.map( (item,index) =>{
                  return(
                    <div className='dane-container' key={index}>
                      
                      <p>Nazwa : {item.Nazwa} , kod : <span style={{color:'red',fontWeight:'bold'}}>{item.Kod}</span></p>
                      <p>Opis przedmiotu : {item.Wyglad}</p>
                      <p>Data zakupu : <span style={{color:'red',fontWeight:'bold'}}>{item.Zakup} </span>/ Paragon {item.Paragon}</p>
                      <p>Data sporządzenia reklamacji: {item.DataSporzadzenia}</p>
                      <p>Sposób załatwienia reklamacji : <span style={{color:'blue',borderBottom:'1px solid blue'}}>{item.Żadanie}</span> </p>
                      <p>Filia : <span style={{color:'green',fontWeight:'bold',fontSize:'20px'}}>{item.Filia}</span></p>
                      <p>Podpisał : {item.Podpisał}</p>
                      <p>Osoba zgłaszająca : {item.OsobaZgłaszajaca} / Telefon : {item.Telefon}</p>
                      <p>Email klienta : {item.Email}</p>
                      <p>Opis reklamacji : {item.OpisReklamacji}</p>

                      <button onClick={ () => handleDelete(item.Email)}>Delete document</button>
                    
                    </div>
                  )
                })}
              </div>


      
      
    </div>
  );
}

export default App;
