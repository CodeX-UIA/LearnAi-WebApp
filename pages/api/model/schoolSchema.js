import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    schoolName:{
        type:String,
        required:true
    },
    schoolID:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    assemblyArea:{
        type:String,
        required:true
    },
    auditorium:{
        type:String,
        required:true
    },
    cafeteria:{
        type:String,
        required:true
    },
    electricity:{
        type:String,
        required:true
    },
    furniture:{
        type:String,
        required:true
    },
    libraries:{
        type:String,
        required:true
    },
    sanitation:{
        type:String,
        required:true
    },
    scienceLabs:{
        type:String,
        required:true
    },
    sportsFacilities:{
        type:String,
        required:true
    },
    water:{
        type:String,
        required:true
    },
    english:{
        type:String,
        required:true
    },
    literature:{
        type:String,
        required:true
    },
    maths:{
        type:String,
        required:true
    },
    science:{
        type:String,
        required:true
    },
    socialScience:{
        type:String,
        required:true
    },
    amenitiesRating:{
        type:Number,
        required:true
    },
    teachers:{
        type:Number,
        required:true
    },
    enrolledStudents:{
        type:Number,
        required:true
    },
    averageMarks:{
        type:Number,
        required:true
    },
    averagetraveltime:{
        type:Number,
        required:true
    },
    ParentalEducation:{
        type:Number,
        required:true
    },
    safety:{
        type:Number,
        required:true
    },
    avgIncome:{
        type:Number,
        required:true
    }

});


let schools= mongoose.models.school || mongoose.model('school', schoolSchema);
export default schools;