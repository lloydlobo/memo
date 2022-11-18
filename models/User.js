import mongoose from "mongoose";

// https://youtu.be/_IBlyR5mRzA?t=8615
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: String, required: true, default: false },
    },
    {
        timestamps: true,
    }
);

// Null for the first time before seeded.
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
