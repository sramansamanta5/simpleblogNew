import Blog from "../models/blogModel.js";

export const showblogs=async(req,res)=>{
    try {
        res.send("All blogs will appear here..")
    } catch (error) {
        console.log(error)
    }
    
   
}


export const createBlog=async(req,res)=>{
    try {
        const data=req.body;
        const blog= new Blog(data);
        const response=await blog.save();
        console.log(response);
        res.status(201).send(response);

    } catch (error) {
        console.log(error)
        res.status(400).send({message:"Something went wrong!!"})
    }
}


export const getAllBlogs=async(req,res)=>{
    try {
        const blogs=await Blog.find({})
        res.status(201).send({count:blogs.length,data:blogs});
        
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"Something went wrong!!"})
    }
}


export const getSingleBlog=async(req,res)=>{
    try {
        const id=req.params.id;
        const blog=await Blog.findById(id)
        console.log(blog)
        res.status(201).send({data:blog});
        
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"Something went wrong!!"})
    }
}


export const updateBlog=async(req,res)=>{
    try {
        const id=req.params.id;
        const updatetedData= req.body;
        const result=await Blog.findByIdAndUpdate(id,updatetedData,{returnOriginal:false});
        console.log(result)
        res.status(201).send({data:result});
        
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"Something went wrong!!"})
    }
}


export const deleteBlog=async(req,res)=>{
    try {
        const id=req.params.id;
        const result=await Blog.findByIdAndDelete(id);
        console.log(result)
        res.status(201).send({message:'Successfully deleted'});
        
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"Something went wrong!!"})
    }
}
