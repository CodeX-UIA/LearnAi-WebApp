import mongoose from 'mongoose';

const agencySchema = new mongoose.Schema({
  email:{
   type:String,
   required:true
  },
 typeEnitity:{
    type:String,
    required:true
 },
 name:{
    type:String,
    required:true
 },
 discription:{
    type:String,
    required:true
 },
 typeOrganisation:{
    type:String,
    required:true
 },
 trustType:{
    type:String,
    required:true
 },
 trustName:{
    type:String,
    required:true
 },
 address:{
    type:String,
    required:true
 },
 pincode:{
    type:Number,
    required:true
 },
 city:{
    type:String,
    required:true
 },
 state:{
    type:String,
    required:true
 },
 url:{
    type:String,
    required:true
 },
 regNo:{
    type:String,
    required:true
 },
 panNo:{
    type:String,
    required:true
 },
 ifsc:{
    type:String,
    required:true
 },
 bankName:{
    type:String,
    required:true
 },
 branchName:{
    type:String,
    required:true
 },
 bankAccountNo:{
    type:String,
    required:true
 },
 nameAsPerBank:{
    type:String,
    required:true
 },
 entityLogo:{
    type:String,
    required:true
 },
 schemeManaged:{
    type:String,
    required:true
 },
 panFile:{
    type:String,
    required:true
 },
 identityProofFile:{
    type:String,
    required:true
 },
 verified:{
    type:String,
    required:true
 },
 banned:{
    type:String,
    required:true
 }
});


let Agency= mongoose.models.Agency || mongoose.model('Agency', agencySchema);
export default Agency;