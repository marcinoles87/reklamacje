import React from 'react'

function DaneProduktu({setKod,setNazwa,setOpis,setWyglad,setZakup,setParagon}) {
  return (
    <div className='dane-firmy'>
        <h2>Dane Produktu</h2>
        <p>Kod :       <input placeholder='kod produktu' onChange={ (e) => setKod(e.target.value)}></input></p>
        <p>Nazwa :     <input placeholder='nazwa produktu' onChange={ (e) => setNazwa(e.target.value)}></input></p>
        <p>Data zakupu : <input type='date' placeholder='data-zakupu' onChange={ (e) => setZakup(e.target.value)}></input></p>
        <p>Paragon nr : <input type='text' onChange={ (e) =>setParagon(e.target.value)}></input></p>
        <p>Opis wady : <input placeholder='opis wady / uszkodzenia' onChange={ (e) => setOpis(e.target.value)}></input></p>
        <p>Stan produktu : <input placeholder='opisz wyglad przedmiotu ' onChange={ (e) => setWyglad(e.target.value)}></input></p>
    </div>
  )
}

export default DaneProduktu