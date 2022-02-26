require("dotenv").config()
const mongoose=require("mongoose")

const express=require("express")

const app=express()

app.use(express.json())
const {body} = require("express-validator");

const {login, register} = require("./controllers/auth.controller");
const controller=require("./controllers/property.controller")

// app.use("/bookTheProperty",controller)

app.use("/properties",controller)

const connect=require("./connection/connect")

const port=process.env.PORT 


app.listen(port,async()=>{
    try {
        await connect()

        console.log(`listening on port ${port}`)
    } catch (e) {
        console.log(e.message)
    }
});

app.post("/login",
body("email").notEmpty().isEmail(),
body("password").notEmpty(), login);

app.post("/register", 
body("name").notEmpty().isLength({min:3, max:30}),
body("password").notEmpty().isLength({min:6, max:14}),
body("email").notEmpty().isEmail(), register);
