import React from 'react'

function DaneProduktu({setKod,setNazwa,setOpis}) {
  return (
    <div className='dane-firmy'>
        <h2>Dane Produktu</h2>
        <p>Kod : <input placeholder='kod produktu' onChange={ (e) => setKod(e.target.value)}></input></p>
        <p>Nazwa : <input placeholder='nazwa produktu' onChange={ (e) => setNazwa(e.target.value)}></input></p>
        <p>Opis wady :<input placeholder='opis wady / uszkodzenia' onChange={ (e) => setOpis(e.target.value)}></input></p>
    </div>
  )
}

export default DaneProduktu