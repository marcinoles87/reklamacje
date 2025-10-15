import React from 'react'

function DaneZglaszajacego({setDaneZglaszajacego,setEmailZglaszajacego}) {
  return (
    <div className='dane-firmy'>
      <h2>Dane klienta</h2>
      <p>Imie i naziwsko :<input type='text' placeholder='imie i nazwisko' onChange={ (e) => {setDaneZglaszajacego(e.target.value)}}></input></p>
      <p>Email :<input type='email' placeholder='email' onChange={ (e) => {setEmailZglaszajacego(e.target.value)}}></input></p>
    </div>
  )
}

export default DaneZglaszajacego