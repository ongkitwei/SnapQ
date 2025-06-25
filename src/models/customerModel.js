import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerNumber: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerStrength: { type: String, required: true },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "project",
  },
});

const Customer =
  mongoose.models.customer || mongoose.model("customer", projectSchema);
export default Customer;
