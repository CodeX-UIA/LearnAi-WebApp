import student from "../model/studentSchema";
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

    const details = new student({
        email:req.body.email,
        name:req.body.name,
        teacher:req.body.teacher,  
        race:req.body.race,
        age:req.body.age,
        famsize:req.body.famsize,
        Fedu:req.body.fedu,
        reason:req.boy.reason,
        guardian:req.body.guardian,
        traveltime:req.body.traveltime,
        studytime:req.body.studytime,
        failures:req.body.failures,
        famrel:req.body.famrel,
        freetime:req.body.freetime,
        Walc:req,
        health:req.body.health,
        G1:req.body.G1,
        G2:req.bopsy.G2,
        gender:req.body.gender,
        absences:req.body.absences,
        address:req.body.address,
        schoolsup:req.body.schoolsup,
        famsup:req.body.famsup,
        paid:req.body.paid,
        activities:req.body.activities,
        nursery:req.body.nursery,
        higher:req.body.higher,
        internet:req.body.internet,
        romantic:req.body.romantic,

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
