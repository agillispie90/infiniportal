require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const truckRoutes = require('./routes/truckRoutes')
const profileRoutes = require('./routes/profileRoutes')
const app = express()



app.use(express.json())

app.use('/trucks',truckRoutes)
app.use('/profile', profileRoutes)





mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('connected to DB')
    app.listen(process.env.PORT,(req,res) => {
        console.log("Listening on port ", process.env.PORT)
    })
}) .catch((err)=> {
    console.log(err)
})
   

