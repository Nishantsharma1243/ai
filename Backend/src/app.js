const express = require('express')
require('dotenv').config();
const app = express();
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

app.use(cors())
const corsConfig ={
    origin:process.env.Client_URL,
    credentials:true,
    method:["GET","POST","DELETE"],
}
app.options("",cors(corsConfig));
app.use(cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.get('/',(req,res)=>{
    res.send("hello everyone")
})

app.use("/ai",aiRoutes);

module.exports = app;
