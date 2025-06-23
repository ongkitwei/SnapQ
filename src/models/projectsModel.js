import { required } from "joi";
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  project: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
});

const Project =
  mongoose.models.project || mongoose.model("project", projectSchema);
export default Project;
