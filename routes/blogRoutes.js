import express from 'express'
import { showblogs,createBlog,getAllBlogs,getSingleBlog,updateBlog,deleteBlog } from '../controllers/blogController.js';

const router=express.Router();

router.get('/seeblogs',showblogs)
router.get('/getblogs',getAllBlogs)
router.get('/getblog/:id',getSingleBlog)
router.post('/createblog',createBlog)
router.put('/getblog/:id',updateBlog)
router.delete('/getblog/:id',deleteBlog)

export default router 