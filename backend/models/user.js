import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName:{
            type: String,
            required: true,
            maxlength: 25
        },
        username:{
            type: String,
            required: true,
            maxlength: 25,
            unique: true
        },
        password:{
            type: String,
            required: true,
            minlength:6
        },
        gender:{
            type: String,
            required: true,
            enum: ["male", "female","other"]
        },
        profilePic:{
            type: String,
            default: "",
        },
    },
    { timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;    