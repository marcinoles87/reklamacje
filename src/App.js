import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import DaneFirmy from './components/DaneFirmy';
import DaneProduktu from './components/DaneProduktu';
import DaneZglaszajacego from './components/DaneZglaszajacego';
import Drukuj from './components/Drukuj'

import { Link, Routes } from 'react-router';
import { Route } from 'react-router';

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
  const [wszystkieDaneBazy , setDane] = useState([])
  const [rozpatrzona , setRozpatrzona] = useState(false)

  const [dodanaReklamacja , setDodana] = useState(false)

  const [filter , setFilter] = useState('');
  const [elementDruku , setElementDruku] = useState([])


  useEffect( () => {

    console.log('pierwszy effect')

    axios.get('http://localhost:8081')
    .then( res => {
      console.log(res.data)
      
    })
    .catch( err => console.log(err)
    )
  },[])

  const handleFilter = () =>{
  
  console.log(wszystkieDaneBazy)
  const wyselekcjonowaneDane = [...wszystkieDaneBazy];
  const nowa = wyselekcjonowaneDane.filter( item => item.Filia.includes(filter))
  setDane(nowa)

}

  const handleShow = () => {

  
     axios.get('http://localhost:8081')
    .then( res => {
      console.log(res.data)
            setDane(res.data)
    })
    .catch( err => console.log(err)
    )
  
  }

  const handleRozpatrzona = async (item) =>{

    axios.put(`http://localhost:8081/rozpatrzone/${item}`)
    axios.get('http://localhost:8081')
    .then(
      res => {
        setDane(res.data)}
    ).catch(
      err =>  {
        console.log(err)}
    )
    

  }

  const handleUpdate = () =>{

  const dataDzis = new Date(); 
  const dzien = dataDzis.getDate();
  const miesiac = dataDzis.getMonth()+1;
  const rok = dataDzis.getFullYear();
  const dataSporzadzenia = `${dzien}-${miesiac}-${rok}`

  const dataRozpatrzenia = `${dzien+14}-${miesiac}-${rok}`

  if(emailZglaszajacego !=='' && tel !=='' && kod !==''
  ){

    document.querySelector('input').classList.toggle('red')

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
        Rozpatrzona : rozpatrzona,
        DataRozpatrzenia : dataRozpatrzenia,
        })
        .then( () =>{
        setDodana(true)
         alert(`
      
      Twoje zgłoszenie reklamacyjne zostało wysłane ! mamy 14 dni na rozpatrzenie , prosimy o cierpliwość .

      Filia : ${filia}
      Podpisał : ${sprzedawca}
      Osoba zglaszająca : ${daneZglaszajacego}
      Email : ${emailZglaszajacego} / Telefon : ${tel}
      Kod : ${kod}  ${nazwa}
      Opis reklamacji : ${opis}
      Opis oddanego przedmiotu : ${wyglad}
      Żądanie nabywcy : ${zadanie}
      `)
      })

  }else{
    alert('uzupełnij pole EMAIL / TELEFON / KOD PRODUKTU...')
  }

   axios.get('http://localhost:8081')
    .then( res => {
      console.log(res.data)
            setDane(res.data)
    })
    .catch( err => console.log(err)
    )

  


}

  const handleDelete = async (item) =>{

    axios.delete(`http://localhost:8081/delete/${item}`)
    
    // setDane(wszystkieDaneBazy.filter( (val) =>{
    //   return item !== val.Nazwa
    // }))

    axios.get('http://localhost:8081')
    .then( res => {
      setDane(res.data)
    })
    .catch( err =>{
      console.log(err)
    })
    
    alert(`usunięto reklamacje`)
  }

  const handleZamknij = () =>{
    setDodana(false)
  }

  const handleDrukuj = (item) =>{
    setElementDruku(item)
    console.log(elementDruku)
  }

  return (
    <div className="App">

<Routes>
    <Route path='*' element={
    <>
    <div className='dane'>
      <img src={logo} alt=""></img>
      <h3>FORMULARZ REKLMACYJNY</h3>
      <p>Prosimy o wypełnienie wszystkich wymaganych pól. </p>
      <p>Produkt powinien być względnie wyczyszczony , bez resztek jedzenia / napojów .</p>
      </div>
      
            <DaneFirmy filia={filia} setFilia={setFilia} paragon={paragon}  sprzedawca={sprzedawca} setSprzedawca={setSprzedawca}></DaneFirmy>
            <DaneZglaszajacego setDaneZglaszajacego={setDaneZglaszajacego} setEmailZglaszajacego={setEmailZglaszajacego} setTelefon={setTelefon} setZadanie={setZadanie}></DaneZglaszajacego>
            <DaneProduktu setKod={setKod} setNazwa={setNazwa} setOpis={setOpis} setWyglad={setWyglad} setZakup={setZakup} setParagon={setParagon}></DaneProduktu>

              {dodanaReklamacja ? 
              
              <div className={dodanaReklamacja ? 'alert-dodano' : 'dodano'}>
                <p>Reklamacja dodana pomyślnie</p> 
                <button onClick={handleZamknij}>Zamknij</button> 

              </div>

                : ''}
                
                
              <button onClick={handleUpdate}>Dodaj zgłoszenie</button>
              <button onClick={handleShow}>Pokaż zgłoszenia</button>

              <div className='wszystkie-reklamacje-container'>
                <div className='filter-container'>
                  <label>Filia
                    <input onChange={ (e) => setFilter(e.target.value)}></input>
                  </label>

                  <button onClick={handleFilter}>Znajdz</button>
                </div>

              <div className='all-item-container'>
                    {wszystkieDaneBazy.map( (item,index) =>{

                
                  return(

                    <div className={item.Rozpatrzona ? 'dane-container rozpatrzona' :'dane-container '} key={index} >
                      

                      <div className='dane-img' style={item.Rozpatrzona ? {backgroundColor:'#239b65'} : {backgroundColor:'red',color:'white'}}>
                        <h3>{item.Filia}</h3>
                      </div>
                      <div className='dane-client'>
                          <h2>{item.OsobaZgłaszajaca}</h2>
                          <i className="fa-solid fa-phone"></i> {item.Telefon}  <i className="fa-solid fa-envelope"></i> {item.Email}
                      </div>

                      <div className='dane-product'>
                        <p>Produkt : <span style={{color:'#00dd90ff',fontWeight:'bold'}}>{item.Kod} / {item.Nazwa} </span></p>
                        <p>Data zakupu : <span style={{color:'#00dd90ff',fontWeight:'bold'}}>{item.Zakup} </span></p>
                        <p>Paragon {item.Paragon}</p>
                        <p>Żądanie : <span style={{color:'rgba(0, 223, 134, 1)'}}>{item.Żadanie}</span> </p>
                        <p>Opis wady : {item.OpisReklamacji}</p>
                        <p>Stan przedmiotu : {item.Wyglad}</p>
                        <p>Rozpatrzona : {item.Rozpatrzona ? <span style={{fontSize:'20px',color:'#00dd90ff',fontWeight:'bold'}}>TAK</span> : <span style={{color:'red'}}>'NIE'</span> }</p>

                      </div>

                      <div className='dane-filia'>
                        {/* <p>Filia : <span style={{color:'#00dd90ff',fontWeight:'bold',fontSize:'20px'}}>{item.Filia}</span></p> */}
                        <p>Data sporządzenia reklamacji: {item.DataSporzadzenia}</p>
                        <p>Należy rozpatrzyć do dnia : <span style={{color:'red'}}>{item.DataRozpatrzenia}</span> </p>
                        <p>Przyjął : {item.Podpisał}</p>
                      </div>

                        <div className='dane-buttons'>
                          <button onClick={ () => handleDelete(item.Email)}>Usuń</button>
                      <button onClick={ () => handleRozpatrzona(item.Email)}>Rozpatrzona</button>
                      <button ><Link onClick={ () => handleDrukuj(item)}  to={'/drukuj'}>Drukuj</Link></button>
                        </div>
                       
                     

                    
                    
                    </div>
                  )
                })}
                  </div>
                
              </div>

                  </>

        }
    />

    <Route path='/drukuj' element={<Drukuj item={elementDruku}></Drukuj>}></Route>

      </Routes>

      
      
      
    </div>
  );
}

export default App;
