import React from 'react'

function DaneProduktu({setKod,setNazwa,setOpis}) {
  return (
    <div className='dane-firmy'>
        <h2>Dane Produktu</h2>
        <p>Kod : <input placeholder='kod produktu' onChange={ (e) => setKod(e.target.value)}></input></p>
        <label for="nazwa">Nazwa : <input placeholder='nazwa produktu' onChange={ (e) => setNazwa(e.target.value)}></input></p>
        <label for="opis_wady"><textarea placeholder='opis wady / uszkodzenia' onChange={ (e) => setOpis(e.target.value)}></textarea></p>
    </div>
  )
}

export default DaneProduktu