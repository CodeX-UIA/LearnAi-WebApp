import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    zone:{
        type:String,
        required:true
    },
    averageMarks:{
        type:Array,
        required:true
    },
    averageReview:{
        type:Number,
        required:true
    },  
    infra:{
        type:Number,
        required:true
    }

});


let school= mongoose.model.school || mongoose.model('school', schoolSchema);
export default school;