import express from 'express';
import mongoose from 'mongoose';


import dishRouter from './api/routes/dishRoutes'

const app = express();
const port = process.env.PORT || 3000;
const db = mongoose.connection;
mongoose.connect(
    // 'mongoddb://localhost:3000/tentenstaffbible'
    // ,{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // }
)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//add routes under heres

app.use('./api/routes', dishRouter);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})