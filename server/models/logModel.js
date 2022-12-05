import mongoose from "mongoose";

const requiredNumber = {
    type:Number,
    required:true,
}

 
const logSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    comments:String,
    image:String,
    rating:{
        type:Number,
        min:0,
        max:10,
        default:0,
    },
    latitude:{
        ...requiredNumber,
        min:-90,
        max:90
    },
    longitude:{
        ...requiredNumber,
        min:-180,
        max:180
    },
    visitDate:{
        type:Date,
        required:true
    }
},{timestamps:true})

const Log = mongoose.model("Log", logSchema);

export default Log;
