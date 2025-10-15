import React from 'react'

function DaneZglaszajacego({setDaneZglaszajacego,setEmailZglaszajacego}) {
  return (
    <div className='zglaszajacy-container'>
      <h2>Dane klienta</h2>
      <label><input type='text' placeholder='imie i nazwisko' onChange={ (e) => {setDaneZglaszajacego(e.target.value)}}></input></label>
      <label><input type='email' placeholder='email' onChange={ (e) => {setEmailZglaszajacego(e.target.value)}}></input></label>
    </div>
  )
}

export default DaneZglaszajacego