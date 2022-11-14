import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    averageReview:{
        type:Number,
        required:true
    },  
    averageMarks:{
        type:Number,
        required:true
    },
    school:{
        type:String,
        required:true
    }

});


let teachers= mongoose.model.teacher || mongoose.model('teacher', teacherSchema);
export default teachers;