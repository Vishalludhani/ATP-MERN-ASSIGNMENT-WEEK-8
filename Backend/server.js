import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { UserApp } from "./API's/UserAPI.js";

dotenv.config();

const app = express();

// Middleware
const corsOptions = {
  origin: [
    'http://localhost:2000', 
    'http://localhost:5173',
    'https://atp-mern-assignment-week-8-enuv.vercel.app'
  ], // Allow frontend origins (localhost for dev, deployed frontend)
  credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions));

// Database connection
mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', UserApp);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
