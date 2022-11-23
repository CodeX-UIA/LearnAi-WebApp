import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

  email:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:false
  }

});


let users= mongoose.models.user || mongoose.model('user', UserSchema);
export default users;