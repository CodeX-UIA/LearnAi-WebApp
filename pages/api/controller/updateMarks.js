import student from "../model/studentSchema";
import connectDB from "../auth/lib/connectDB";
import users from "../model/userSchema";
import axios from "axios";

connectDB();

export default async function handler(req,res){
    const a=[];
    try{ 
      
         student.find({}).then(
                async(user)=>{
                    const da= await axios({
                        method: "post",
                        url: `http://localhost:8000`,
                        withCredentials: true, 
                        //credentials: 'include',
                        headers: {
                          "Content-Type": "application/json",
                        },
                        data:user
                      })
                      console.log(da)
                    if(user){
                        user.map((item,index)=>{
                    
                          student.findOneAndUpdate({_id:item._id},{$set:{G3:da.data[index]}} )
                        })
                   
                        return res.json({message:a})
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

