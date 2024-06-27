import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
            houseName :{
                type : String,
                required : true
            },
            rent :{
                type : Number,
                required : true
            },
            walkingDistance :{
                type : String,
                required : true
            },
            description:{
                type : String,
            },
           location :{
                type : String,
                required : true
            },
            landmark :{
                type : String,
                required : true
            },
            type : {
                type : String,
                required : true
            },
            owner :{
                type : String,
               required : true
            },
            ownerId :{
                type : String,
                required : true,
            },
            contactNo :{
                type : String,
                required : true
            },
            extraContactNo :{
                type : String,
            },
            rules:{
                type : String
            }
},{timestamps : true})

export const Room = mongoose.model("Room",roomSchema)