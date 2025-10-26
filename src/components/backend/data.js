const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "s31.cyber-folks.pl",
    user: "v55582726",
    password: "megapunkt500" ,
    database : "v55582726_viptour"
})


app.post('/' , (req,res) => {

    const Nazwa = req.body.Nazwa;
    const Data = req.body.Data;
    const Opis = req.body.Opis;
    const Adres = req.body.Adres;
    const Nip = req.body.Nip;
    const Cena = req.body.Cena;


    db.query("INSERT INTO wydarzenia (Nazwa , Data , Opis , Adres , Nip , Cena) VALUES (?, ? , ? , ? , ? , ? )" , [Nazwa,Data,Opis,Adres,Nip,Cena] , 
        (err , result) => {
            console.log(result)
            if(err) {
                console.log('error dodawania')
            }else{
                res.send('values insered')
            }

        }
    )

})

app.delete('/' , (req,res) =>{
    console.log('usunieto')

    
})

app.update('/' , (req,res) =>{

    db.query("ALTER TABLE wydarzenia ADD Email varchar(255)")
})


app.get( '/' , (req,res) =>{
    console.log('pobrano')

    const sql = 'SELECT* from wydarzenia'

    db.query(sql,(err,data) => {
        console.log(res.json(data))
    })
})


app.listen(8081, () =>{
    console.log('nasluchuje')
})