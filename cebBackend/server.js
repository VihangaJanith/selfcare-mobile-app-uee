const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const {dbConnection} = require('./db/dbCon')
// const studentRouter = require('./routes/studentRoutes')
const inquiryRouter = require('./routes/inquiryRoute')

const meterReadingRouter = require('./routes/meaterReading')
const customerRouter = require('./routes/customerRoute')
const userRouter = require('./routes/userRoutes')
const teamRouter = require('./routes/teamRoute')
const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

// app.use('/student', studentRouter)

app.use('/inquiry', inquiryRouter)

app.use('/meter', meterReadingRouter)
app.use('/customer', customerRouter)

app.use('/user', userRouter)
app.use('/team', teamRouter)
const PORT = 5000;

app.listen(PORT, ()=>{
    dbConnection();
    console.log(`Server is running on port ${PORT}`);
})