const jwt = require('jsonwebtoken');

//verifying is User is logged in or not for taking an further actions
const VerifyUser = (req,res,next)=>{

    //useing cookie for authentication
    if(!req.headers.cookie) return res.status(401).send('Access Denied');
    const token = req.headers.cookie.slice(11);

    try {
        //verify user from cookie token
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;

        //if user is verified
        next();
    } catch (error) {
        res.send(error);
    }
    
}
module.exports = VerifyUser;