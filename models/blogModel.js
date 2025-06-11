import mongoose from "mongoose";


const blogschema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true,
  },
  author:{
    type:String,
    required:true
  },
  
},{
    timestamps:true
})

const Blog=mongoose.model("Blog",blogschema);

export default Blog