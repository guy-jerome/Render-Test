import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req,res)=>{
  res.send("HELLO WORLD")
})

app.listen(port, ()=>{
  console.log("Server Running on port", port);
})