const Router = require('express').Router();
const LoginUser = require('../controller/User/UserLogin');
const UserSignup = require('../controller/User/UserSignup');
const VerifyUser = require('../middlewares/VerifyUser');
const User = require('../models/User');

//get Logged in Username
Router.get('/', VerifyUser, async(req,res)=>{
    res.send(await User.findOne({_id : req.user._id}),'Username');
});

//Router for creating or Signup of user
Router.post('/Signup',UserSignup);

//route for Login
Router.post('/login',LoginUser);

//Logout by deleting cookie
Router.post('/logout',VerifyUser, async(req,res)=>{
    res.cookie('auth-token','',{maxAge:0});
    res.status(200).send({message:"Logout Success"});
});

module.exports = Router;