import express from "express";
import data from "./data";

const app = express();

app.get('/api/products',(req,res)=>{
    res.send(data.products);
})

app.listen(4000, ()=>{console.log('server start and running');
})