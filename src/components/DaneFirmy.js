import React from 'react'
import { useState } from 'react'

function DaneFirmy ({filia,setFilia,paragon,sprzedawca,setSprzedawca}) {
    

    const dataDzis = new Date()
    const dataZgloszenia = `${dataDzis.getDate()}.${dataDzis.getMonth()+1}.${dataDzis.getFullYear()}`


    
  return (
    <div className='dane-firmy'>
        <h2>Dane firmy / punktu : </h2>
        <p>Sklep / filia : <input type="text" onChange={ (e) => setFilia(e.target.value)}></input></p>
        <p>Sporządził : <input type="text" onChange={ (e) =>setSprzedawca(e.target.value)}></input></p>
        <p>Wniosek sporządzono dnia : {dataZgloszenia}</p>

    </div>
  )
}

export default DaneFirmy
