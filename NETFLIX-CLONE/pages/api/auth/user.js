import dbConnect from '../../../utils/dbConnect'
import UserSch from '../../../models/user'
dbConnect()

const handler = async (req,res) => {
    try{
        const findData = await UserSch.find({email: req.body.email})
        if(findData.length > 0){
            res.status(200).json({data: 'Already Exists'})
            return
        }
        const data = new UserSch(req.body)
        await data.save()
        res.status(200).json({data: 'Signup success'})
    }catch(err){
        console.log(err)
        res.status(400).json({data: "error"})
        return 
    }
}

export default handler