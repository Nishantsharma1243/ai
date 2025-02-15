const express = require('express')
require('dotenv').config();
const app = express();
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Change this to your deployed frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.get('/',(req,res)=>{
    res.send("hello everyone")
})

app.use("/ai",aiRoutes);

module.exports = app;
