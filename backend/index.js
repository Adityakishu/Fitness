const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./model/employee')

const app = express()
app.use (express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");


app.post('/register', (req, res)=>{
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => re.json(err))
})



app.post('/Login', (req, res)=>{
    const{email, password}= req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No data found")
        }
    })
})


app.listen(3001, () => {
    console.log("Server is running on 3001")
})