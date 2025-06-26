import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  project: { type: String, required: true },
  CurrentQueueNumber: { type: Number, default: 0 },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
});

const Project =
  mongoose.models.project || mongoose.model("project", projectSchema);
export default Project;
