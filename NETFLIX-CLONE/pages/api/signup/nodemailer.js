const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
const {generateOTP} = require('../../../utils/generateOTP')

//initalize nodemailer client
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_SENDER_ID,
        pass: process.env.NODEMAILER_SENDER_ID_PASSWORD
    }
})

export default async function handler(req,res){
    //generate otp
    const otp = generateOTP()
    //hash otp
    const hashedOTP = await bcrypt.hash(otp,10)
    //set mail options
    const mailOptions = {
        from: process.env.NODEMAILER_SENDER_ID,
        to: req.body.email,
        text: `Your otp for netflix verification is ${otp}. Valid for 10 minutes`
    }  
    //send mail
    try {
        const rsp = await transport.sendMail(mailOptions)
        // console.log(rsp)
        res.status(200).json({data: hashedOTP})
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false})
        return
    }
}