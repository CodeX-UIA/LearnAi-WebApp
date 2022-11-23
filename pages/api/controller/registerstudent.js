import student from "../model/studentSchema";
import connectDB from "../auth/lib/connectDB";
import users from "../model/userSchema";

connectDB();
export default async function handler(req, res) {
  try {
    // let check1 = await users.findOne({ email: req.body.email });
    // if (check1) {
    //     return res.send({message:"A user with this email id already exists"});
    // }
    // console.log(check1);

    const details = new student({
    email:req.body.email, 
    name:req.body.name,
    teacher:"harsh", 
    Race:"Asian",
    school:req.body.school,
    sex:req.body.sex,
    age:req.body.age,
    address:req.body.address,
    famsize:req.body.famsize,
    Pstatus:req.body.Pstatus,
    Medu:req.body.Medu,
    Fedu:req.body.Fedu,
    Mjob:req.body.Mjob,
    Fjob:req.body.Fjob,
    reason:req.body.reason,
    guardian:req.body.guardian,
    traveltime:req.body.traveltime,
    studytime:req.body.studytime,
    failures:req.body.failures,
    schoolsup:req.body.schoolsup,
    famsup:req.body.famsup,
    paid:req.body.paid,
    activities:req.body.activities,
    nursery:req.body.nursery,
    higher:req.body.higher,
    internet:req.body.internet,
    romantic:req.body.romantic,
    famrel:req.body.famrel,
    freetime:req.body.freetime,
    goout:req.body.goout,
    Dalc:req.body.Dalc,
    Walc:req.body.Walc,
    health:req.body.health,
    absences:req.body.absences,
    G1:req.body.G1,
    G2:req.body.G2,
    G3:"100"

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
