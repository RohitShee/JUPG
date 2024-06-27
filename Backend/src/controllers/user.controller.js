import { asyncHandler } from "../utils/asyncHandeler.js"
import {ApiResponse} from "../utils/apiResponse.js"
import {User}  from "../models/user.model.js"
import { Room} from "../models/rooms.model.js"

const generateAccessAndRefreshTokens = async(userId)=>{
    try{
       const user =  await User.findById(userId);
       const accessToken = user.generateAccessToken()
       const refreshToken = user.generateRefreshToken()
       user.refreshToken = refreshToken
       await user.save({validateBeforeSave: false})
       return {accessToken,refreshToken}
    }catch(error){
        return res.status(500).json({message : "Something went wrong while generating refresh and access token"})
    }
}

const signUpUser = asyncHandler(async (req,res)=>{
    const {username,fullName,password} =  req.body

    if(
        [fullName,username,password].some((field) => field.trim() === "")
    ){
        return res.status(400).json({message : "All fields are required"})
       
    }

    const existedUser = await User.findOne({username})

    if(existedUser){
        return res.status(400).json({message : "User already exist"})
    }

    const user = await User.create({
        fullName,
        password,
        username : username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        return res.status(500).json({message : "Something went wrong while registering the user"})
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"user registered successfully")
    )

})

const loginUser = asyncHandler(async(req,res)=>{
    const {username,password} = req.body
    if(!username){
        return res.status(400).json({message : "usernameis required"})
    }

    const user = await User.findOne({username})
    if(!user){
        return res.status(400).json({message : "user doesn't exist"})
    }

    const isPasswordValid = await user.ispasswordCorrect(password)
    if(!isPasswordValid){
        return res.status(401).json({message : "passWord doesn't match"})    
    }

    const {accessToken,refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
     const options = {
            httpOnly : true,
            secure : true
     }

     return res
     .status(200)
     .cookie("accessToken",accessToken,options)
     .cookie("refreshToken",refreshToken,options)
     .json(new ApiResponse(200,{
        user : loggedInUser,accessToken,refreshToken
     },
    "User logged in succeessfully"
    ))
})

const addRoom = asyncHandler(async(req,res) =>{
    const {houseName,type,location,description,rent,walkingDistance,landmark,owner,contactNo,extraContactNo,rules} = req.body
    //console.log(type)
    const room = await Room.create({
        houseName,
        rent,
        walkingDistance,
        description,
        location,
        landmark,
        type,
        owner,
        contactNo,
        extraContactNo,
        ownerId : req.user?._id,
        rules
    })
    const createdRoom = await Room.findById(room._id).select(
        "-ownerId ")
    if(!createdRoom){
        return res.status(500).json({message : "Something went wrong while Adding the Room"})
    }
    return res.status(201).json(
        new ApiResponse(200,createdRoom,"Room Created successfully")
    )
})
const getRooms = asyncHandler(async(req,res)=>{
    const data = await Room.find().select("-ownerId")
    //console.log(data)
    res.status(200)
    .json(data)
})
const getSomeRooms = asyncHandler(async(req,res)=>{
    const data = await Room.find().select("-ownerId")
    res.status(200)
    .json(data.splice(0,3))
})

const getRoom = asyncHandler(async(req,res)=>{
    const {id} = req.params
    //console.log(id)
    const data = await Room.findById(id).select("-ownerId")
    res.status(200)
    .json(data)
})
const getUserRoom = asyncHandler(async(req,res)=>{
    const {username} = req.params
    const user = await User.findOne({username}).select("-refreshToken")
    if(!user){
        return res.status(400).json({message : "User Doesn't exist"})
    }
    const data = await Room.find({ownerId : user._id}).select("-ownerId")
    res.status(200)
    .json(data)
})
const updateRooms = asyncHandler(async(req,res)=>{
    const {id} = req.params
    console.log('here')
    console.log({id})
    const {houseName,type,location,description,rent,walkingDistance,landmark,owner,contactNo,extraContactNo,rules} = req.body
    const room = await Room.findById({id})
    room.houseName =houseName
    room.type = type
    room.location = location
    room.description = description
    room.rent = rent
    room.walkingDistance = walkingDistance
    room.landmark = landmark
    room.owner = owner
    room.contactNo = contactNo
    room.extraContactNo =extraContactNo
    room.rules = rules
    return res.status(201).json(
        new ApiResponse(200,createdRoom,"Room Details updated successfully")
    )
})
export {signUpUser,loginUser,addRoom,getRooms,getSomeRooms,getRoom,getUserRoom,updateRooms}