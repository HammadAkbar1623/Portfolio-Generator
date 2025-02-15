import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './DB/index.js'
import portfolioRoutes from './routes/portfolio.js'
import authRoutes from './routes/auth.js'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})

.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);