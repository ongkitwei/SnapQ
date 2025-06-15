import connectionToMongoDb from "@/libs/mongo";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionToMongoDb();
    const { name, email } = await request.json();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // User exists - return a response or just skip insert
      return NextResponse.json(
        { message: "User already exists", user: existingUser },
        { status: 200 }
      );
    }

    const newUser = new User({
      name: name,
      email: email,
    });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
