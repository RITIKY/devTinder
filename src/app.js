const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.send("welcome to home")
})

app.get("/server", (req,res) =>{
    res.send("Hello from the Server 4000")
})

app.get("/request", (req,res) =>{
    res.send("Whats your Request ?")
})

app.listen(4000,() => {
    console.log("Server is successfully listerning on port 4000");
})