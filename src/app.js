const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.send("Home");
})

app.get("/user", (req,res) =>{
    res.send({firstName: "Ritik", lastName: "Yadav"});
})

app.post("/user", async(req,res) =>{
    res.send("Data Successfully saved to database!");
})

app.delete("/user",(req,res)=>{
    res.send("Delete Successfully")
})

app.listen(4000,() => {
    console.log("Server is successfully listerning on port 4000");
})