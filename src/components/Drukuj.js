import React from 'react'

function Drukuj({item}) {
  console.log(item)
  return (
    <div className='druk-container'>
      Witamy w strefie druku reklamacji nr :

            <div className='dane-product'>
                        <p>Produkt : <span style={{color:'#00dd90ff',fontWeight:'bold'}}>{item.Kod} / {item.Nazwa} </span></p>
                        <p>Data zakupu : <span style={{color:'#00dd90ff',fontWeight:'bold'}}>{item.Zakup} </span></p>
                        <p>Paragon {item.Paragon}</p>
                        <p>Żądanie : <span style={{color:'rgba(0, 223, 134, 1)'}}>{item.Żadanie}</span> </p>
                        <p>Opis wady : {item.OpisReklamacji}</p>
                        <p>Stan przedmiotu : {item.Wyglad}</p>
                        <p>Rozpatrzona : {item.Rozpatrzona ? <span style={{fontSize:'20px',color:'#00dd90ff',fontWeight:'bold'}}>TAK</span> : <span style={{color:'red'}}>'NIE'</span> }</p>

                      </div>


      
      
      
      </div>
      
        
      
  )
}

export default Drukuj