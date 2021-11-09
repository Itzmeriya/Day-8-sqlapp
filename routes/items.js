const mysql = require('mysql2');
const express = require('express');
//const{schema} = require('mangoose');
var router = express.Router();
//configuring express server
router.use(express.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'detail',
    multipleStatements: true
    });
mysqlConnection.connect((err)=> {
    if(!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });
        router.get('/' , (req, res) => {
            mysqlConnection.query('select * from workid=?;', (err, rows, fields) => {
            if (!err)
            res.send(rows);
         //return res.console.log(rows);    
            else
            console.log(err);
            })
         } );
//Router to GET specific item detail from the MySQL database
 router.get('/:id' , (req, res) => {
    mysqlConnection.query('SELECT * from worker WHERE workid = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
         })
     } );
        
 module.exports=router;
        

/*Router to POST specific items
router.post('/worker/add',(req,res,next)=>{
var designation ='Rishi';
var location = 'TVM'
var State = 'Kerala'

mysqlConnection.query('insert into worker(designation,location,State) values()',
(err,result)
)
})*/