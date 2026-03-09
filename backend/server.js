import dotenv from "dotenv";
dotenv.config();          // 👈 MUST be first

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"





// app config
const app =express()
const port=4000


//middleware
app.use(express.json())
app.use(cors())

connectDB();


//api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://<db_username>:<db_password>@cluster0.6ukal61.mongodb.net/?