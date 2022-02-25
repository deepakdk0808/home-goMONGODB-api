const mongoose=require("mongoose")

const propertySchema=new mongoose.Schema({
    images:[{type:String,required:true}],
    features:{type:String,required:true},
    propertyName:{type:String,required:true},
    price:{type:Number,required:true},
    location:{type:String,required:true}

},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("properties",propertySchema)


// {
//     image:["https://cdn2.hometogo.net/large/v1/edf/c5d/bd75661718a313504124c6ca88.jpg",
//     "https://cdn2.hometogo.net/large/v1/49e/83c/46fcd121790836dff839a40eba.jpg",
//    "https://cdn2.hometogo.net/large/v1/001/09d/18f7489cf3acace79471533452.jpg",
//    "https://cdn2.hometogo.net/large/v1/7c3/522/5866f39321409700c84c4b458e.jpg",
//    "https://cdn2.hometogo.net/large/v1/d69/893/2816da7cbfd619c302f01545d3.jpg"],
//        imgUrl:"https://cdn2.hometogo.net/large/v1/edf/c5d/bd75661718a313504124c6ca88.jpg",
//       feature:"1440 ft² Apartment.2 bedrooms.2 guests",
//       name1:"nice resort in fort Myers with pool,Barbecue",
//        price:"300",
//       location:"📍panama City Beach,Bay Country",

//   }