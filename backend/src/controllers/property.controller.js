const mongoose=require("mongoose")

const express=require("express")

const app=express()

const router=express.Router()

app.use(express.json())

const Property=require("../models/property.model")

const Booking=require("../models/bookingDeatails.model")
// const { route } = require("express/lib/application")


// const router=express.Router()


router.get("",async(req,res)=>{
    try {
        const properties= await Property.find().lean().exec()

        return res.status(200).send(properties)
    } catch (e) {
        res.send(e.message)
    }
})


router.post("",async(req,res)=>{
    try {
        const properties= await Property.create(req.body)

        return res.status(200).send(properties)
    } catch (e) {
        res.send(e.message)
    }
})



router.get("/:id",async(req,res)=>{
    try {
        const properties= await Property.findById(req.params.id).lean().exec()

        return res.status(200).send(properties)
    } catch (e) {
        res.send(e.message)
    }
})


router.post("",async(req,res)=>{
    try {
        const bookings=await Booking.create(req.body)

        return res.send(bookings)
    } catch (e) {
        res.send(e.message)
    }
})


router.get("/:id",async(req,res)=>{
    try {
        const propertyData=await Booking.find({"property_id":req.params.id}).lean().exec()

        return res.send(propertyData)
    } catch (e) {
        res.send(e.message)
    }
})



module.exports=router