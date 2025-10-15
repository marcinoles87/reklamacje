import React from 'react'

function DaneProduktu({setKod,setNazwa,setOpis}) {
  return (
    <div className='reklamacja-container'>
        <h2>Dane Produktu</h2>
        <label for="kod">Kod : <input placeholder='kod produktu' onChange={ (e) => setKod(e.target.value)}></input></label>
        <label for="nazwa">Nazwa : <input placeholder='nazwa produktu' onChange={ (e) => setNazwa(e.target.value)}></input></label>
        <label for="opis_wady"><textarea placeholder='przyczyna reklmacji' onChange={ (e) => setOpis(e.target.value)}></textarea></label>
    </div>
  )
}

export default DaneProduktu