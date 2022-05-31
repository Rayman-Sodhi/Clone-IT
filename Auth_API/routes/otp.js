const router=require("express").Router();
const atob=require("atob");
const User=require("../models/User");

/*router.post("/register/otp",async (req, res)=> {
try{
   if(await User.findOne({otp: req.body.otp})) 
  { await User.updateOne({otp:req.body.otp}, {isVerified: true}); 
      
    return res.send({"msg":"Your email has been verified"});
}
        res.send({"msg":"OTP is incorrect"});
}
catch(err)
{res.send(err);}
});
*/

router.get("/register/otp",async (req, res)=> {                                 //sending otp on client side
        try{  const cookie=req.cookies.info;
    const dec=cookie.split('.')[1];
const decode=JSON.parse(atob(dec));
                const userExist=await User.findOne({_id:decode});
       
        if(!userExist)
        return res.status(200).send({"msg":"User not registered"});

 res.status(200).send(String(userExist.otp));
        }

        catch(err)
        {res.send(err);}
        });


        router.put("/register/otp/verify",async (req, res)=> {              //taking isVerified and updating in db
                try{
const isVerified= req.body.isVerified;


if(!isVerified)
return res.status(200).send({"msg":"Database updated to: User not verified"});
const cookie=req.cookies.info;
    const dec=cookie.split('.')[1];
const decode=JSON.parse(atob(dec));
await User.updateOne({_id:decode}, {isVerified: true}); 

return res.status(200).send({"msg":"Database updated to: User is verified"});
                }
catch(err)
        {res.send(err);}
        });
        

module.exports = router;