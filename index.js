const express = require('express'); //import express
const cors = require("cors"); //import cors
const dotenv = require("dotenv"); //import dotenv
const mongoose = require("mongoose") // import mongoose 
const userRouter = require("./controllers/User")

dotenv.config(); //Load .env variables

const app = express() //app object

//global middleware
app.use(cors());
app.use(express.json());

const DATABASE_URL = process.env.DATABASE_URL

//MONGODB connection
  
  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });


//Routes
app.get("/", (req, res) => {
  res.send("Server is working")
})

app.use("/user", userRouter) 

//app listner
const PORT = process.env.PORT || 1000
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})

