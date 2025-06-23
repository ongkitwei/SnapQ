import mongoose from "mongoose";

async function connectionToMongoDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
  }
}

export default connectionToMongoDb;
