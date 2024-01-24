const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExist = await User.findOne({ email,name });

  if (userExist) {
    res.status(400).json({ message: "User Already Exist" });
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(200).json({
      _id : user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token : generateToken(user._id)
    });
  }

  else { 
    res.status(404)
    throw new Error("Error occured")
  }


});


const loginUser = async (req,res) => {
  const {email,password} = req.body

  const user = await User.findOne({email})

  if(user && (await user.matchPassword(password)))
  {
    res.status(200).json({
      _id : user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token : generateToken(user._id)
    })
  }
  else { 
    res.status(404).json({message : "Invalid email or password"})
  }

}

module.exports = { registerUser,loginUser };
