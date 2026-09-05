const express = require('express')
const mongoose = require('mongoose')
const studentRoute = require('./controller/studentRoute')

const app = express()
const PORT = 2365

const MONGO_URL = "mongodb://localhost:27017/mydb";
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Ibrahim Umar Ality")
})
app.use('student', studentRoute)

mongoose.connect(MONGO_URL).then(() =>{
    console.log('MONGO is Connected!')
    app.listen(PORT,()=>{
        console.log(`App is Running on http://localhost:${PORT}`)
    })

}).catch(err => console.error('Mongo Connection Fail!', err))