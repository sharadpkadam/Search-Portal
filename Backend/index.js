import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./utils/db.js";
import userRouter from "./routes/User.js";
import banquetRouter from './routes/Banquet.js'; 
import hotelRouter from "./routes/Hotel.js"; 
import gymRouter from "./routes/Gym.js"; 
import realEstateRouter from "./routes/RealEstate.js"; 
import sendMailRouter from "./routes/sendMail.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// APIs
app.use("/api/user", userRouter);
app.use('/api/banquets', banquetRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/gyms', gymRouter);
app.use('/api/realestates', realEstateRouter);
app.use("/api/book", sendMailRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
