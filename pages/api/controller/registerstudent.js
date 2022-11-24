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
    console.log(req.body);
    const details = new student({
    email: "  ", 
    name:req.body.data.name,
    teacher:"harsh", 
    Race:"Asian",
    sex:req.body.data.sex,
    age:req.body.data.Age,
    address:'U',
    famsize:'GT3',
    Pstatus:req.body.data.Pstatus,
    Medu:req.body.data.Medu,
    Fedu:req.body.data.Fedu,
    Mjob:"other",
    Fjob:"other",
    reason: "other",
   guardian: "mother",
   traveltime: 1,
   studytime: 2,
   failures: 3,
   schoolsup: "yes",
   famsup: "no",
   paid: "yes",
   activities: "no",
   nursery: "yes",
   higher: "yes",
   internet: "yes",
   romantic: "no",
   famrel: 4,
   freetime: 3,
   goout: 2,
   Dalc: 2,
   Walc: 3,
   health: 3,
   absences: 10,
   G1:'0',
   G2: '0',
   G3:'0'

    });
    details.save();

 
    res.send({ message: "Successfully registered" });
  } catch (err) {
    res.send({ message: err });
  }
}
