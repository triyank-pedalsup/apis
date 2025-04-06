const jwt = require('jsonwebtoken');

const jwtMiddleware = (req,res,next) =>{

    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(500).json({message:"token not found"});
    }
    
    //extract jwt token from the header
    const token = authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"unauthorized"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(error){
        return res.status(401).json({message:"invalid token"});
    }   
}

//function to generate token
const generateToken = (payLoad)=> {
    const token = jwt.sign(payLoad,process.env.JWT_SECRET,{expiresIn:"30days"});
    return token;
}

module.exports = {jwtMiddleware,generateToken};