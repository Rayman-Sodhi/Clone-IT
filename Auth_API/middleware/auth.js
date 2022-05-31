const jwt=require("jsonwebtoken");
const atob=require("atob");
const User=require("../models/User");

module.exports= async(req,res,next)=>{ 

  //verify token

  try{const token=req.cookies.info;
    const dec=token.split('.')[1];
const decode=JSON.parse(atob(dec));
    
    const cookieUser=await User.findOne({_id:decode});

if(!token)
return res.send({"msg":"Access Denied"});

    const verified=jwt.verify(token,process.env.JWT_TOKEN_SECRET);
   const isVerified=cookieUser.isVerified;

    if(verified._id == cookieUser._id) {
    if(!(await isVerified === true))
     return res.send({"msg":"You are not verified"});
//res.send(verified);

    req.user=verified;   // a session is established
      next();
    }
}

catch(err){res.send({"msg":"Invalid token"});}

}