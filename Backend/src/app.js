import userRouter from './routes/user.routes.js'
import portfolioRouter from './routes/portfolio.routes.js'
import express from 'express'
import cors from 'cors'
const app = express();

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
    credentials: true, // Allow cookies/auth headers
}));


app.use("/api/v1/users", userRouter);

app.use("/api/v1/users", portfolioRouter);

export default app