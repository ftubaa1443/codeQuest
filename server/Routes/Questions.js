import express from 'express' 
import { AskQuestion, deleteQuestion, getAllquestions, voteQuestion } from '../controllers/Question.js'

const router = express.Router() 

router.post('/Ask' , AskQuestion)
router.get('/get' , getAllquestions )
router.delete('/delete/:id' , deleteQuestion)
router.patch('/vote/:id' , voteQuestion)

export default router