import express from 'express'
import { showblogs } from '../controllers/blogController.js';

const router=express.Router();

router.get('/seeblogs',showblogs)

export default router