import mongoose from "mongoose";
import users from "../models/auth.js";

export const fetchAll = async(req , res)=>{
    try {
        const allusers = await users.find()
        const alluserdetails = []
        allusers.forEach((user) => {
           alluserdetails.push({ _id : user.id ,
            name : user.name ,
            tags : user.tags ,
            joinedOn : user.joinedOn ,
           })
        });
        res.status(200).json(alluserdetails)
    } catch(error){
        res.status(404).json({ message : error.message})
        return
    }
}

export const updateprofile = async (req , res) =>{
    const {_id} = req.params ;
    const { name , about , tags } = req.body ;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("user unavailable")
    }
    try {
       const updateprofile = await users.findByAndUpdate(_id , {$set : { name : name , about : about , tags : tags}} , 
         { new : true}
       )
       res.status(200).json(updateprofile)
    }catch(error){
       res.status(404).son({ message : error.message})
       return 
    }
}