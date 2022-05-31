const router=require("express").Router();
const verify=require("../middleware/auth");


router.get("/",verify, (req,res)=>{
res.send({"msg":"You are verified so you can access this page."});

});

router.delete("/logout",(req,res)=>{

    //delete coookie

    res.clearCookie("info");
res.send({"msg":"Cookie cleared"});
res.end();         //ends the response process
        
    });
module.exports=router;