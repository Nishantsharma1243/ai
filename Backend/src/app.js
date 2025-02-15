const cors = require('cors')
const express = require('express')

const app = express();
const aiRoutes = require('./routes/ai.routes')

require('dotenv').config();

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
