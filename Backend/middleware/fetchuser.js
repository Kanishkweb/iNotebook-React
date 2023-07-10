const jwt = require('jsonwebtoken');
const JWT_SECRET = "Harryisagood$oy";

const fetchuser = (req,res,next)=> {
    // Get the user from JWT Token and id to req the object 
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
        
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: ' Using  Invalid Token ' });
      }
}

module.exports = fetchuser;