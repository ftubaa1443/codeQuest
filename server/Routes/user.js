import express from "express";

import { login , signup } from "../controllers/auth.js";
import { fetchAll , updateprofile } from "../controllers/user.js";
import { auth } from "../middlewares/auth.js";



const router = express.Router();

router.post('/signup' , signup)
router.post('/login' , login)

router.get('/getallusers' , fetchAll)

router.patch('/update/:id', updateprofile)

export default router