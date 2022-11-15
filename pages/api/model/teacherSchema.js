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
    concept:{
        type:Number,
        required:true
    },
    understandibility:{
        type:Number,
        required:true
    },
    suppportive:{
        type:Number,
        required:true
    },
    sentiment:{
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