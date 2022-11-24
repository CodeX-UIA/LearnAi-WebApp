import student from "../model/studentSchema";
import connectDB from "../auth/lib/connectDB";

connectDB();

export default async function handler(req,res){
    const a=[];
    try{ 
         student.find({}).then(
                async(user)=>{
                    if(user){
                        return res.json(user)
                    }
                    else{
                        return res.json({error:"Try Again Later!"})
                    }
                }
            )
           
    }
     catch(err){
            console.log(err);
            return res.json({error:err})
     }
}