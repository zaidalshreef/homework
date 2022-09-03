if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
const mongoose = require('mongoose');
const express = require('express');
const courses = require('./route/courses');
const students = require('./route/students');
const semester = require('./route/semester');


// Connect MongoDB at default port 27017.
async function connect() {
    await mongoose.connect('mongodb://localhost:27017/test');
}
 connect().catch(function (err) {
    console.log(err);
 })

 const app = express()
 app.use(express.json())

 app.use("/",students)
 app.use("/",courses)
 app.use("/",semester)

 



 app.listen(port, () => console.log(`Example app listening on port !`))