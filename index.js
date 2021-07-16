//const express = require('express') tihs is how waas used in the old way it is common JS now you can use import
import express from "express"; // new way and add in package json "type": "module"
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from 'dotenv'
dotenv.config()

const app = express()



//conrct to database
db.authenticate() 
 .then(() => console.log('data base connected'))
 .catch(error => console.log(error))



//enable pug
app.set('view engine', 'pug')

// get current year
app.use((req, res, next) => { //middleware
    const year = new Date();

    res.locals.currentYear =  year.getFullYear();
    res.locals.nameSite = 'Travels Agency';
    next(); //ensure execute after the othres middlewares
})

// Add body parser for reading the date from the testimonials form
app.use(express.urlencoded({extended: true}));

//define public file
app.use(express.static('public'))

//add router
app.use('/', router)

/** Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0'; //it is dinamically first value local, second value asigned by eroku
//define port
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
    console.log(`Server is working in port ${port}`)
})