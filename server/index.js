const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'hrmanagement',
});

app.listen(3001, ()=>{
    console.log("server running on port 3001")
})

app.post('/create', (req,res)=> { //req= request from front end, res= send to front end
    const name = req.body.name;
    const age = req.body.age;
    const position = req.body.position;
    const salary = req.body.salary;
    var count=0;
    /*
    db.query(
        "SELECT * FROM employeeinfo WHERE name like ? and age = ?",[name, age], function(err, value, val){
            if(err) {
                throw err;
              } else {
                count = value.length;
                console.log(count);
              }
        }
    )*/
/*   
console.log(count);
    if (count != 0){*/
    db.query(
        "INSERT INTO employeeinfo (name, age, position, salary) VALUES (?,?,?,?)", 
        [name, age, position, salary],
        (err, result)=>{
            if (err){
                console.log(err)
            }else{
                res.send("values inserted")}} 
    )
    /*   
}else 
    console.log("Sorry record already exist");*/

})