const { urlencoded } = require('express')
const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const  userschema=require("./schema/userschema")


app.use(express.json())
app.use(urlencoded({extended:false}))
app.use(cors())

app.listen(8002,(err)=>{
       if (!err) {
              console.log("server started at port 3010");
            } else {
              console.log(err);
            }
})

mongoose.connect("mongodb://localhost/registerform",(err)=>{
       if (!err) {
              console.log("connected to Database");
            } else {
              console.log(err);
            }
})


app.post("/form",(req,res)=>{
       userschema.create({
              name:req.body.name,
              phonenumber:req.body.phonenumber,
              registertype:req.body.registertype,
              email:req.body.email
              
       }).then((data)=>{
              res.status(200).send(data)
       }).catch((err)=>{
              res.status(400).send(err)
       })
})


app.get("/form",(req,res)=>{
       userschema.find().then((data)=>{
              res.status(200).send(data)
       }).catch((err)=>{
              res.status(400).send(err)
       })
})


