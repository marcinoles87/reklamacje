import React from 'react'
import { useState } from 'react'

function DaneFirmy ({filia,setFilia,paragon,setParagon,sprzedawca,setSprzedawca}) {
    console.log(filia)

     const [data , setData ] = useState('')

    const dataDzis = new Date()
    const dataZgloszenia = `${dataDzis.getDate()}.${dataDzis.getMonth()}.${dataDzis.getFullYear()}`
    
  return (
    <div className='dane-firmy'>
        <h2>Dane firmy : </h2>
        <p>Megapunkt 500 sp z o.o sklep / filia : <input type="text" onChange={ (e) => setFilia(e.target.value)}></input></p>
        <p>Wniosek sporządzono dnia : {dataZgloszenia}</p>
        <p>Paragon nr : <input type='text' onChange={ (e) =>setParagon(e.target.value)}></input></p>
        <p>Sporządził : <input type="text" onChange={ (e) =>setSprzedawca(e.target.value)}></input></p>


    </div>
  )
}

export default DaneFirmy
