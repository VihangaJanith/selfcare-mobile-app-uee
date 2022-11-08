const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const {dbConnection} = require('./db/dbCon')
// const studentRouter = require('./routes/studentRoutes')
const inquiryRouter = require('./routes/inquiryRoute')
<<<<<<< HEAD
const userRouter = require('./routes/userRoutes')
=======
const teamRouter = require('./routes/teamRoute')
>>>>>>> fe5cb7e9a648c685a89bc08690509307a1bce70c

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

// app.use('/student', studentRouter)

app.use('/inquiry', inquiryRouter)
<<<<<<< HEAD
app.use('/user', userRouter)
=======
app.use('/team', teamRouter)
>>>>>>> fe5cb7e9a648c685a89bc08690509307a1bce70c

const PORT = 5000;

app.listen(PORT, ()=>{
    dbConnection();
    console.log(`Server is running on port ${PORT}`);
})