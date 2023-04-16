const User = require('../../models/User')
const bcrypt = require('bcryptjs')

const UserSignup = async(req,res)=>{
    const Username = req.body.username;
    const Password = req.body.password;

    //checking if username is already present or not
    if(await User.findOne({Username : Username})) return res.send('Username Already Taken!')

    //hashing password with salts of 10 length
    const hash = await bcrypt.hash(Password,10);
    
    const user = new User({
        Username : Username,    
        Password : hash 
    })

    try {
        //saving new user data
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.send(error)
    }

}

module.exports = UserSignup;