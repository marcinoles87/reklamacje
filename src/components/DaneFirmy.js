import React from 'react'
import { useState } from 'react'

function DaneFirmy ({filia,setFilia,paragon,SetParagon}) {
    console.log(filia)

     const [data , setData ] = useState('')

    const dataDzis = new Date()
    const dataZgloszenia = `${dataDzis.getDate()}.${dataDzis.getMonth()}.${dataDzis.getFullYear()}}`
    
  return (
    <div className='dane-firmy'>
        <h2>Dane firmy : </h2>
        <p>Megapunkt 500 sp z o.o sklep / filia : <input type="text" onChange={ (e) => setFilia(e.target.value)}></input></p>
        <p>Wniosek sporządzono dnia : {dataZgloszenia}</p>
        <p>Paragon nr : <input type='text' onChange={ (e) =>SetParagon(e.target.value)}></input></p>


    </div>
  )
}

export default DaneFirmy
