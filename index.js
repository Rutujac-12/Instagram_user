// index.js
import express from 'express';
import {  configDotenv } from 'dotenv';
configDotenv();
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import dbConnect from './config/database.js';


const app = express();


app.use(bodyParser.json());
app.use('/users', userRoutes);

const startServer = async () => {
  try {
    await dbConnect(); 
    app.listen(3000, ()=>{
      console.log("Server Listening on Port 3000")
}) 

  } catch (error) {
    console.error('Server startup error:', error);
  }
};

startServer();
