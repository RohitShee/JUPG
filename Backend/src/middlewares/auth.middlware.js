import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandeler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req,res,next)=>{
   try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    if(!token){
        return res.status(401).json({message : "Unauthorized request pls login first "})
    }

    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decodedToken?._id).select("-password -refreshToen")
    if(!user){
        return res.status(401).json({message : "Invalid request pls login first "})
    }
    req.user = user;
    next();
   } catch (error) {
    return res.status(401).json({message : "invalid Access Token pls login first "})
   }
})