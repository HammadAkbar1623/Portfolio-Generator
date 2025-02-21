import dotenv from 'dotenv'
import connectDB from './DB/index.js'
import app from './app.js'
import cors from 'cors'

dotenv.config({
    path: './.env'
})

app.use(cors());

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("Mongo DB connection failed", err);
    
})