import React from 'react'

function DaneZglaszajacego({setDaneZglaszajacego,setEmailZglaszajacego,setTelefon}) {
  return (
    <div className='dane-firmy'>
      <h2>Aktualne dane kontaktowe klienta :</h2>
      <p>Imie i nazwisko :<input type='text' placeholder='imie i nazwisko' onChange={ (e) => {setDaneZglaszajacego(e.target.value)}}></input></p>
      <p>Email :<input type='email' placeholder='email' onChange={ (e) => {setEmailZglaszajacego(e.target.value)}}></input></p>
      <p>Telefon : <input type='number' placeholder='telefon' onChange={ (e) => {setTelefon(e.target.value)}}></input></p>
    </div>
  )
}

export default DaneZglaszajacego