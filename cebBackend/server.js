const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const {dbConnection} = require('./db/dbCon')
// const studentRouter = require('./routes/studentRoutes')
const inquiryRouter = require('./routes/inquiryRoute')

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

// app.use('/student', studentRouter)

app.use('/inquiry', inquiryRouter)

const PORT = 5000;

app.listen(PORT, ()=>{
    dbConnection();
    console.log(`Server is running on port ${PORT}`);
})