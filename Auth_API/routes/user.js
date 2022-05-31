const router=require("express").Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const atob=require("atob");
const nodemailer = require("nodemailer");

const saltRounds=10;
const User=require("../models/User");

function emailer(to,subject,text,msg){                      //function to send email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.PASSWORD
        }
      });
      
      const mailOptions = {
        from: process.env.EMAIL_ID,
        to: to,
        subject: subject,
        text: text
      };
      
      transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log( msg + info.response);
                }
            });
}

router.post("/register",async (req,res)=>{

    try{
const {name, userName, password, year, branch , gender, address, email, phoneNo} = await req.body;
const otp= Math.floor((Math.random()*9000)+999);
/*if(!(name && userName && password && year && branch && address && email && phoneNo))
{ return res.send({"msg":"All inputs are required"});  }
*/

const userExist= await User.findOne({userName});
if(userExist)
{return res.status(200).send({"msg":"User already exists. Please log in."});}

const hashedPassword= await bcrypt.hash(password, saltRounds);
const newUser=await User.create({
    name,
    userName,
    password: hashedPassword,
    year,
    branch,
    gender,
    address,
    email,
    phoneNo,
    otp,
    isVerified: false,
    impwd: password
});
//captcha validation
/*const captcha=req.body.captcha;
if( captcha === undefined || captcha==="" || captcha===null)
return res.status(200).send({"msg":"Captcha validation failed"});

const key= process.env.CAPTCHA_SECRET_KEY;

const verifyUrl= "https://www.google.com/recaptcha/api/siteverify?secrets="+key+"&response="+captcha;

request(verifyUrl,(err,response,body)=>{

body=JSON.parse(body);
if(body.success!= undefined && !body.success){
    return res.status(200).send({"msg":"Captcha validation failed"});
}
  return res.status(200).send({"msg":"Captcha validation successful"});
});
*/




//Sending OTP

emailer(newUser.email, "OTP for email verification", "Your OTP is " + newUser.otp, "OTP sent: " );




const token=jwt.sign({_id: newUser._id}, process.env.JWT_TOKEN_SECRET,{expiresIn:1000*3600});
/*const dec=token.split('.')[1];
const decode=JSON.parse(atob(dec));
console.log(decode._id);*/

//cookie
res.cookie("info",token,{
     secure: true,
     path:"/", 
     httpOnly: true
 });
res.status(200).send({"msg" : "User successfully signed up."});
}
catch(err){console.log(err);}});



router.get("/register/resend",async(req,res)=>{
//Resending OTP
try{const cookie=req.cookies.info;
    const dec=cookie.split('.')[1];
const decode=JSON.parse(atob(dec));

const cookieUser=await User.findOne({_id:decode});
const otp= Math.floor((Math.random()*9000)+999);
await User.updateOne({userName: cookieUser.userName},{otp: otp} );
emailer(cookieUser.email, "OTP for email verification","Your OTP is " + otp, "OTP resent: " );  
      }
        catch(err){
            console.log(err);
        }
        res.send({"msg":"OTP resent"});
    });
 
 

router.post("/login", async (req,res)=>{
    //login

try{
    const {userName ,password} =req.body;
/*if(!(userName && password))
return res.send({"msg":"All inputs are required"});*/

      const userExist=await User.findOne({userName:userName });
        if(!userExist)
        return res.send({"msg":"User not registered"});
        
        const validPass=await bcrypt.compare(password,userExist.password);
            if(!validPass)
            return res.send({"msg":"Incorrect password"});

            //coookie


            const token=jwt.sign({_id: userExist._id}, process.env.JWT_TOKEN_SECRET,{expiresIn:1000*3600});
           res.cookie("info",token,{
     secure: true,
     path:"/", 
     httpOnly: true
 });
    res.send({"msg":"Logged in successfully"});
}


catch(err){console.log(err);}
});
 
router.post("/login/forgot", async (req,res)=>{
//forgot password

try{const forgotUser= req.body.userName;
    const userExist=await User.findOne({userName:forgotUser });

    if(!userExist)
    return res.send({"msg":"User not registered"});

    const isVerified=userExist.isVerified;
        if(!isVerified)
        return res.send(userExist);

        emailer(userExist.email, "Your password is" , userExist.impwd, "Password sent: " ); 
                    res.send({"msg":"Password sent."});
}

catch(err){console.log(err);}
});

router.get("/user/:userName",async (req,res)=>{try{
const id= req.params.userName;
const userExist=await User.findOne({userName:id }).select("-impwd");
if(!userExist)
return res.send({"msg":"User not registered"});
res.send(userExist);
}

catch(err){console.log(err);}

});
    module.exports = router;