import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import useRoutes from './Routes/user.js'
import questionRoutes from './Routes/Questions.js'
import answerRoutes from './Routes/Answer.js'

const app = express();
app.use(express.json({limit : "30mb" , extended:true}))
app.use(express.urlencoded({limit:"30mb" , extended: true}))
app.use(cors())

app.get('/' , (req , res) =>{
    res.send("This is a Stack Overflow clone API ")
})

app.use('/user' , useRoutes);
app.use('/questions' , questionRoutes);
app.use('/answer' , answerRoutes )

const PORT = process.env.PORT || 8080

const CONNECTION_URL =  'mongodb+srv://tuba:tubaf%401310@atlascluster.qiljayf.mongodb.net/Stack-overflow-clone'

mongoose.connect( CONNECTION_URL , { useNewUrlParser : true , useUnifiedTopology : true})
  .then(()=> app.listen(PORT , () => {console.log(`server running on port ${PORT}`)}))
  .catch((err) => console.log(err.message))