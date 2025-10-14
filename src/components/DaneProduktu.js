import React from 'react'

function DaneProduktu() {
  return (
    <div className='reklamacja-container'>
        <h2>Dane Produktu</h2>
        <label for="kod">Kod : <input placeholder='kod produktu'></input></label>
        <label for="nazwa">Nazwa : <input placeholder='nazwa produktu'></input></label>
        <label for="opis_wady">Opis wady : <input placeholder='przyczyna reklmacji'></input></label>
    </div>
  )
}

export default DaneProduktu