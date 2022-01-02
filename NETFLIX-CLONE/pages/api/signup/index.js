import dbConnect from '../../../utils/dbConnect'
import UserSch from '../../../models/user'
dbConnect()

export default async function handler(req,res){
    try{
        //check if user already exist or not
        var findData = await UserSch.find({email: req.body.email})
        if(findData.length > 0){
            res.status(201).json({data: 'Already Exists'})
            return
        }
        // const hash = await bcrypt.hash(req.body.password,10)
        //save user to db
        const data = new UserSch(req.body)
        await data.save()
        res.status(200).json({data: 'signup success'})
    }catch(error){
        res.status(400).json({success: false})
    }
}