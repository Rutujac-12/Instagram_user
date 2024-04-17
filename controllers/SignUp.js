import User from "../models/userModel.js"; 

export const signUp = async (req, res) => {
    try {
        const { username, email, password,bio,profilePicture } = req.body;
        
        
        const newUser = new User({
        
            username,
            email,
            password,
            bio,
            profilePicture
        });
        
        console.log("yes",newUser);
        
        const savedUser = await newUser.save();
        
        
        return res.status(200).json({
            success: true,
            message: "Account created successfully",
            user: savedUser
        });
    } catch (error) {
        console.error("Error creating account", error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again."
        });
    }
}
