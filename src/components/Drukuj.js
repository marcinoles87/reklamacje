import React from 'react'

function Drukuj({item}) {
  console.log(item)
  return (
    <div className='druk-container'>
          
            <div>
              <h2>Dane firmy</h2>
              <p>Filia : {item.Filia}</p>
              <p>Data sporządzenia reklamacji : {item.DataSporzadzenia}</p>
              <p>Należy rozpatrzyć do dnia : {item.DataRozpatrzenia}</p>
              <p>Sporządził : {item.Podpisał}</p>
            </div>

            <div>
              <h2>Dane klienta</h2>
                <p>{item.OsobaZgłaszajaca}</p>
                <i className="fa-solid fa-phone"></i> {item.Telefon} <br></br> 
                <i className="fa-solid fa-envelope"></i> {item.Email}
            </div>

            <div className='dane-product'>
              <h2>Dane reklamacji</h2>
              <p>Produkt : <span style={{color:'#00dd90ff',fontWeight:'bold'}}>{item.Kod} / {item.Nazwa} </span></p>
              <p>Data zakupu : <span style={{color:'#00dd90ff',fontWeight:'bold'}}>{item.Zakup} </span></p>
              <p>Paragon {item.Paragon}</p>
              <p>Żądanie : <span style={{color:'rgba(0, 223, 134, 1)' , fontWeight:'bold'}}>{item.Żadanie}</span> </p>
              <p>Opis wady : {item.OpisReklamacji}</p>
              <p>Stan przedmiotu : {item.Wyglad}</p>
              <p>Rozpatrzona : {item.Rozpatrzona ? <span style={{fontSize:'20px',color:'#00dd90ff',fontWeight:'bold'}}>TAK</span> : <span style={{color:'red'}}>'NIE'</span> }</p>
            </div>

            <div className='druk-podpis'>
              <p>Sporządził</p>
              <p>Podpis Klienta</p>
            </div>


      
      
      
      </div>
      
        
      
  )
}

export default Drukuj