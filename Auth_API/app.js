require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const cookieParser = require("cookie-parser");
const { response } = require("express");
const cors = require("cors");
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use((req ,res ,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","OPTION,GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");
    next();
})


app.use(cookieParser());
mongoose.connect("mongodb+srv://Delena:Delena123@cluster0.tglzo.mongodb.net/userDB");

const homeRoute=require("./routes/home");
const userRoute=require("./routes/user");
const otpRoute=require("./routes/otp");

app.get("/", (req,res)=>{
    res.send("Hi, the API is working");

});


app.use(express.json());
app.use("/api", userRoute);
app.use("/api/home", homeRoute);
app.use("/api", otpRoute);

app.listen(process.env.PORT || 3000,(err)=>{if(!err)
    console.log("Server started");
    });