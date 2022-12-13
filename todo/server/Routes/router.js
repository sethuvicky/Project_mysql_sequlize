const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");
const db = require("../models");
const Tutorial = db.product;

// register user data
router.post("/create", (req, res) => {

    let {list} = req.body


 
var sql = `INSERT INTO list (lists) VALUES ('${list}')`;
conn.query(sql, function (err, result) {
  if (err) throw err;
  res.status(201).json("Successfuly saved");
});

});




// get userdata

router.get("/getusers",(req,res)=>{

    conn.query('SELECT * FROM `list` ',(err,result)=>{
        if(err){
            res.status(422).json("nodata available");
        }else{
            res.status(201).json(result);
        }
    })
});


// user delete api

router.delete("/deleteuser/:id",(req,res)=>{

    const {id} = req.params;
    console.log(id)

    conn.query("DELETE FROM list WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json('Deleted successfuly');
        }
    })
});



// get single user

router.get("/induser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("SELECT * FROM list WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json('updated successfuly');
        }
    })
});


// update users api
router.post('/edituser/:id', function (req, res) {

    const {id} = req.params;
    console.log(id)
    let {list} = req.body


    conn.query("DELETE FROM list WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
 
            var sql = `INSERT INTO list (lists) VALUES ('${list}')`;
            conn.query(sql, function (err, result) {
              if (err) throw err;
              res.status(201).json("Successfuly Edited");
            });
         }
    })
});


// router.patch("/updateuser/:id",(req,res)=>{
//     var sql = `UPDATE list SET ? WHERE id= ?`;
//     const {id} = req.params;

//     let {list} = req.body
//    conn.query(sql,[list, id], function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });

module.exports = router;



