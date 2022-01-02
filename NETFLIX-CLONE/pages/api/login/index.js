import dbConnect from '../../../utils/dbConnect'
import UserSch from '../../../models/user'
import bcrypt from 'bcryptjs'
dbConnect()

export default async function handler(req,res){
    try {
        const findData = await UserSch.find({email: req.body.email})
        if(findData.length <= 0){
            res.status(200).json({data: "No User Found"})
            return
        }
        const user = findData[0];
        const isMatch = await bcrypt.compare(req.body.password, user?.password)
        if(!isMatch) {
            res.status(200).json({data: "Incorrect Password"})
            return
        }
        res.status(200).json({data: {name: user?.name, email: user?.email}})
    } catch (error) {
        console.log(error)
        res.status(400).json({data: false})
    }
}