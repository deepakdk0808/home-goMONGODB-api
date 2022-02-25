require("dotenv").config()
const mongoose=require("mongoose")

const express=require("express")

const app=express()

app.use(express.json())

const controller=require("../controllers/property.controller")

app.use("/bookTheProperty",controller)

app.use("/properties",controller)

const connect=require("../connection/connect")

const port=process.env.PORT || 2345

app.listen(port,async()=>{
    try {
        await connect()

        console.log(`listening on port ${port}`)
    } catch (e) {
        console.log(e.message)
    }
})