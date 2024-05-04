import User from "../models/User.js";
export const createUser=async (req,resp,next)=>{
 try{ const {email}=req.body
var userexist=await User.findOne({"email":email})
const newUser = new User(req.body);
  await newUser.save();
  console.log(newUser)
      resp.status(200).send("User has been created successfully.");
  } catch (err) {
    resp.status(200).send("user is already registered")
  }
  }


