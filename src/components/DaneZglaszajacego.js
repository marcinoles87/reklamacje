import React from 'react'

function DaneZglaszajacego({setDaneZglaszajacego,setEmailZglaszajacego,setTelefon,setZadanie}) {
  return (
    <div className='dane-firmy'>
      <h2>Aktualne dane kontaktowe klienta :</h2>
      <p>Imie i nazwisko :<input type='text' placeholder='imie i nazwisko' onChange={ (e) => {setDaneZglaszajacego(e.target.value)}}></input></p>
      <p>Email :<input type='email' placeholder='email' onChange={ (e) => {setEmailZglaszajacego(e.target.value)}}></input></p>
      <p>Telefon : <input type='text' placeholder='telefon' onChange={ (e) => {setTelefon(e.target.value)}}></input></p>
      <p>Żądanie :  

        <label> Wymiana na nowy
          <input type='checkbox' className='inputCheck' value={'wymiana na nowy'} onClick={ (e) => setZadanie(e.target.value)}></input>
        </label>

        <label>Zwrot gotówki
          <input type='checkbox' className='inputCheck' value={'zwrot gotówki'} onClick={ (e) => setZadanie(e.target.value)}></input>
        </label>

        <label>Naprawa
          <input type='checkbox' className='inputCheck' value={'naprawa'}  onClick={ (e) => setZadanie(e.target.value)}></input>
        </label>

      </p>
      <p> <span style={{fontSize:'10px'}}>Wszelkie dane użyte w formularzu wykorzystywane są w celu kontaktu z klientem , tylko i wyłącznie przez firme Megapunkt 500</span> </p>
    </div>
  )
}

export default DaneZglaszajacego