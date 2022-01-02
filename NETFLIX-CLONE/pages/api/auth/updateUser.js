import dbConnect from "../../../utils/dbConnect";
import UserSch from "../../../models/user";
dbConnect();

export default async function handler(req, res) {
  try {
    const findData = await UserSch.find({ email: req.body.email });
    if (findData.length <= 0) {
      res.status(400).json("an error occured");
      return;
    }
    var d = new Date(Date.now())
    d.setMonth(d.getMonth()+1)
    await UserSch.updateOne(
      { _id: findData?.[0]?._id },
      {
        $set: {
          subscribed: true,
          plan: req.body.plan,
          expires: d.toDateString(),
        },
      }
    );
    res.status(200).json({data: "success"});
  } catch (error) {
    console.log(error);
    res.status(400).json({ data: false });
  }
}
