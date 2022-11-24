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
    console.log(req.body.data.amenities);
    const details = new school({
      email:req.body.data.email,
      schoolName:req.body.data.schoolName,
      schoolID:req.body.data.schoolID,
      type:req.body.data.type,
      language:req.body.data.language,
      phone:req.body.data.phone,
      address:req.body.data.address,
      assemblyArea:req.body.data.amenities.assemblyArea,
      auditorium:req.body.data.amenities.auditorium,
      cafeteria:req.body.data.amenities.cafeteria,
      electricity:req.body.data.amenities.electricity,
      furniture:req.body.data.amenities.furniture,
      libraries:req.body.data.amenities.libraries,
      sanitation:req.body.data.amenities.sanitation,
      scienceLabs:req.body.data.amenities.scienceLabs,
      sportsFacilities:req.body.data.amenities.sportsFacilities,
      water:req.body.data.amenities.water,
      english:req.body.data.courses.english,
      literature:req.body.data.courses.literature,
      maths:req.body.data.courses.maths,
      science:req.body.data.courses.science,
      socialScience:req.body.data.courses.socialScience,
      enrolledStudents:req.body.data.enrolledStudents,
      amenitiesRating:req.body.data.amenitiesRating,
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
    res.status(500).send({ message: "Error" });
  }
}
