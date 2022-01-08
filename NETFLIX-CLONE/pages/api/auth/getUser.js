import dbConnect from "../../../utils/dbConnect";
import UserSch from "../../../models/user";
dbConnect();

export default async function handler(req, res) {
    try {
        const findData = await UserSch.find({ email: req.body.email})
        if(findData.length<=0){
            res.status(400).json({data: "error"})
            return
        }
        res.status(200).json({data: {
            email: findData[0].email,
            name: findData[0].name,
            subscribed: findData[0].subscribed,
            plan: findData[0].plan,
            expires: findData[0].expires,
        }})
    } catch (error) {
        console.log(error)
        res.status(400).json({data: false})
        return
    }
}