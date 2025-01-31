import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    cartData: {
      type: [
        {
          id: { type: Number, required: true },
          count: { type: Number, required: true },
        },
      ],
      default: [],
      _id: false
    },
    addressData:{type:Object, default:{}}
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;