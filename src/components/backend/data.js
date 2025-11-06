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


app.post('/reklamacje' , (req,res) => {

    const dataDzis = new Date()

    const Filia = req.body.Filia;
    const Podpisał = req.body.Podpisał;
    const OsobaZgłaszajaca = req.body.OsobaZgłaszajaca;
    const Email = req.body.Email;
    const OpisReklamacji = req.body.OpisReklamacji;
    const DataSprzedazy = req.body.DataSprzedazy;
    const Nazwa = req.body.Nazwa;
    const Opis = req.body.Opis;
    


    db.query("INSERT INTO wydarzenia (Filia,Podpisał,OsobaZgłaszajaca,Email,OpisReklamacji,DataSprzedazy,Nazwa,Opis) VALUES (?, ? , ? , ? , ? , ? , ? , ?)" , [Filia,Podpisał,OsobaZgłaszajaca,Email,OpisReklamacji,DataSprzedazy,Nazwa,Opis] , 
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

app.delete('/delete/:item' , (req,res) =>{

    const item = req.params.item;

    db.query("DELETE from wydarzenia WHERE Nazwa = ? " , item ,
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