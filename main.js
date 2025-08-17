const express = require("express");
const PORT = 3000;
const app = express()
const {form} = require("./form.js")

app.use(express.json())

app.get("/",(req,res)=>{
    res.send(form);
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})