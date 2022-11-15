import school from "../model/schoolSchema";
import connectDB from "../auth/lib/connectDB";
import users from "../model/userSchema";

connectDB();
export default async function handler(req, res) {
  try {
    let check1 = await users.findOne({ email: req.body.email });
    if (check1) {
        return res.send({message:"A user with this email id already exists"});
    }
    console.log(check1);

    const details = new school({
      email: req.body.email,
      zone: req.body.zone,
      averageMarks:[],
      averageReview:0,
      infra:0,
    });
    details.save();

    const use=new users({
      email:req.body.email,
      role:req.body.role
  })
  use.save()

    res.send({ message: "Successfully registered" });
  } catch (err) {
    res.send({ message: err });
  }
}
