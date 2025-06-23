import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  image: String,
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
