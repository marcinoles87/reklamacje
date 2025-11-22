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


    const Filia = req.body.Filia;
    const Podpisał = req.body.Podpisał;
    const OsobaZgłaszajaca = req.body.OsobaZgłaszajaca;
    const Email = req.body.Email;
    const OpisReklamacji = req.body.OpisReklamacji;
    const Nazwa = req.body.Nazwa;
    const Żadanie = req.body.Żadanie;
    const Kod = req.body.Kod;
    const Zakup = req.body.Zakup;
    const DataSporzadzenia = req.body.DataSporzadzenia;
    const Paragon = req.body.Paragon;
    const Telefon = req.body.Telefon;
    const Wyglad = req.body.Wyglad;
    const numerReklamacji = req.body.numerReklamacji
    const Rozpatrzona = req.body.Rozpatrzona
    


    db.query("INSERT INTO wydarzenia (Filia,Podpisał,OsobaZgłaszajaca,Email,OpisReklamacji,Nazwa,Żadanie,Kod,Zakup,DataSporzadzenia,Paragon,Telefon,Wyglad,numerReklamacji,Rozpatrzona) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)" , 
        [Filia,Podpisał,OsobaZgłaszajaca,Email,OpisReklamacji,Nazwa,Żadanie,Kod,Zakup,DataSporzadzenia,Paragon,Telefon,Wyglad,numerReklamacji,Rozpatrzona], 
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

    db.query("DELETE from wydarzenia WHERE Email = ? " , item ,
        (err,results) => {
            if(err){
                console.log(err);
            }else{
                 console.log(results);
            }
        }
    )

    
})

app.put('/rozpatrzone/:item' , (req,res) =>{

    const item = req.params.item

    db.query("UPDATE wydarzenia SET Rozpatrzona = true WHERE Email = ? " , item  , 
      (err,results) => {
            if(err){
                console.log(err);
            }else{
                 console.log(results);
            }
        }
)
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