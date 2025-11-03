const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const e = require('cors');

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

    const dataDzis = new Date()

    const Nazwa = req.body.Nazwa;
    const Data = req.body.dataDzis;
    const Opis = req.body.Opis;
    const Adres = req.body.Adres;
    const Nip = req.body.Nip;
    const Cena = req.body.Cena;
    const Filia = req.body.Filia;
    const Podpisał = req.body.Podpisał;
    const OpisReklamacji = req.body.OpisReklamacji;


    db.query("INSERT INTO wydarzenia (Nazwa , Data , Opis , Adres , Nip , Cena , Filia , OpisReklamacji) VALUES (?, ? , ? , ? , ? , ? , ? , ?)" , [Nazwa,Data,Opis,Adres,Nip,Cena,Filia,OpisReklamacji] , 
        (err , result) => {
            console.log(result);
            if(err) {
                console.log('error dodawania');
            }else{
                res.send('values insered');
            };

        }
    )

})

app.delete('/:item' , (req,res) =>{
    console.log('usunieto');

    console.log(req.body.Nazwa);

    const item = req.params.Nazwa;

    db.query("DELETE from wydarzenie WHERE Nazwa = ? " , item ,
        (err,results) => {
            if(err){
                console.log(err);
            }else{
                 console.log(results);
            }
        }
    )

    
})

app.put('/' , (req,res) =>{

    db.query("ALTER TABLE wydarzenia ADD Filia varchar(255)" , (err,data) =>{
        console.log(res.json(data))
    })
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