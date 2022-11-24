import school from "../model/schoolSchema";
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
    const details = new school({
      email:req.body.email,
      schoolName:req.body.schoolName,
      schoolID:req.body.schoolID,
      type:req.body.type,
      language:req.body.language,
      phone:req.body.phone,
      address:req.body.address,
      assemblyArea:req.body.amenities.assemblyArea,
      auditorium:req.body.amenities.auditorium,
      cafeteria:req.body.amenities.cafeteria,
      electricity:req.body.amenities.electricity,
      furniture:req.body.amenities.furniture,
      libraries:req.body.amenities.libraries,
      sanitation:req.body.amenities.sanitation,
      scienceLabs:req.body.amenities.scienceLabs,
      sportsFacilities:req.body.amenities.sportsFacilities,
      water:req.body.amenities.water,
      english:req.body.courses.english,
      literature:req.body.courses.literature,
      maths:req.body.courses.maths,
      science:req.body.courses.science,
      socialScience:req.body.courses.socialScience,
      enrolledStudents:req.body.enrolledStudents,
      amenitiesRating:req.body.amenitiesRating,
      teachers:0,
      enrolledStudents:0,
      averageMarks:0,
      averagetraveltime:0,
      ParentalEducation:0,
      safety:0,
      avgIncome:0
    });
    details.save();
    // res.json(req.body.amenities.furniture);

  //   const use=new users({
  //     email:req.body.email,
  //     role:req.body.role
  // })
  // use.save()

    res.send({ message: "Successfully registered" });
  } catch (err) {
    res.send({ message: err});
  }
}
