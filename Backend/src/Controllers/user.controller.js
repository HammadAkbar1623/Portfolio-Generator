import User from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';

// Register user
const registerUser = async (req, res, next) => {
    try {
        // Step 1: Get details from frontend
        const { name, email, password } = req.body;
        console.log("name:", name);
        console.log("email:", email);
        console.log("password:", password);

        // Step 2: Validation
        if (!name?.trim() || !email?.trim() || !password?.trim()) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Step 3: Check if the user already exists
        const existedUser = await User.findOne({ email });
        if (existedUser) {
            return res.status(409).json({ message: "User with same email already exists" });
        }

        // Step 4: Create user in the database
        const user = await User.create({ name, email, password });

        // Step 5: Check if user was created
        if (!user) {
            return res.status(500).json({ message: "Something went wrong while registering user" });
        }

        return res.status(201).json({ message: "User registered successfully", user });

    } 
    catch (error) {
        console.error("Registering error:", error);
        return res.status(error.statusCode || 500).json({ 
            message: error.message || "Internal Server Error" 
        });
    }
};

// Login User
const loginUser = async(req, res) => {
    
    try {
        // Get data from the user
        const { email, password } = req.body;
        if(! (email || password )){
            throw new ApiError(400, "Email or Password are required")
        }
    
        // Find user in DB
        const user = await User.findOne({ email });

        if(!user){
            throw new ApiError(404, "User not found")
        }
    
        // Check Password
        const isPasswordValid = await user.isPasswordCorrect(password)
        if(!isPasswordValid){
            throw new ApiError(401, "Invalid user credentials");
        }
    
        return res.status(200).json({ message: "User logged in successfully ", user});
    } 
    catch (error) {
        console.error("Login error:", error);
        return res.status(error.statusCode || 500).json({ 
            message: error.message || "Internal Server Error" 
        });
    }
}

export { registerUser,
         loginUser,
 };
