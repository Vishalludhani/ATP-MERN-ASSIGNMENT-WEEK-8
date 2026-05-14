import exp from 'express'
import { UserTypeModel } from '../models/UserModel.js'

//Create min-express app
export const UserApp = exp.Router()


//UserAPI routes


//create User
UserApp.post('/users',async(req,res)=>{
    try {
        let userObj = req.body
        let userDoc = new UserTypeModel(userObj)
        await userDoc.save()
        res.status(201).json({message:"User Created",payload:userDoc})
    } catch(err) {
        if(err.code === 11000) {
            res.status(400).json({message:"Email already exists"})
        } else {
            res.status(500).json({message:"Server Error", error: err.message})
        }
    }
})


//Read All users
UserApp.get('/users',async(req,res)=>{
    let userList = await UserTypeModel.find()

    res.status(200).json({message:"Users: ",payload:userList})
})


//Read a user By ID
UserApp.get("/users/:id",async(req,res)=>{
    let uid=req.params.id
    let user=await UserTypeModel.findById({_id:uid,status:true})
    if(!user) return res.status(404).json({message:"User Not Found"})
    res.status(200).json({message:"User Found",payload:user})
})


//Delete a User by ID
UserApp.delete("/users/:id",async(req,res)=>{
    let uid=req.params.id
    let user = await UserTypeModel.findByIdAndUpdate(uid,{$set:{status:false}},{new:true})
    if(!user) return res.status(404).json({message:"User Not Found"})
    res.status(200).json({message:"User Removed"})
})


//Activate User
UserApp.patch("/users/:id",async(req,res)=>{
    let uid=req.params.id
    let user = await UserTypeModel.findByIdAndUpdate(uid,{$set:{status:true}})
    res.status(200).json({message:"User Activated",payload:user})
})





//Update a User by ID