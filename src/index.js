require('dotenv').config({path:'src/.env'})
const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors');
const taskRoutes = require('./Routes/taskRoutes');



const app =express()

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI,{}).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})


app.use('/api', taskRoutes);

const PORT =process.env.PORT || 9000
app.listen(PORT,()=>{
    console.log(`server Started on Port ${PORT}`)
})
