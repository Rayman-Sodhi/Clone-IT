import dbConnect from "../../../utils/dbConnect";
import UserSch from "../../../models/user";
dbConnect();

export default async function handler(req, res) {
    try{
        const findData = await UserSch.find({email: req.body.email})
        await UserSch.deleteOne({_id: findData[0]._id})
        res.status(200).json({data: 'success'})
    }catch(err){
        console.log(err)
        res.status(400).json({data: false})
        return
    }
}