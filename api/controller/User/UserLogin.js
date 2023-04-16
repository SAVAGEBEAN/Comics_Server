const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const LoginUser = async(req,res) =>{
    
    const Username = req.body.username;
    const Password = req.body.password;

    //checking is username is correct or not
    const findUser = await User.findOne({Username:Username});
    if(!findUser) return res.status(400).send('Incorrect Username or password');

    //checking is password of a given username is valid or not
    const validPass = bcrypt.compare(Password,findUser.Password);
    if(!validPass) return res.status(400).send('Incorrect username or password');

    //creating token for authentication
    const token = jwt.sign({_id : findUser._id},process.env.TOKEN_SECRET);
    res.cookie('auth-token',token,{
        httpOnnly : true,
        maxAge : 8*60*60*1000  //valid for 8 hours..
    });
    res.send(token)
};

module.exports = LoginUser;