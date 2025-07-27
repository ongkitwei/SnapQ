import Project from "@/models/projectsModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connectionToMongoDb from "@/libs/mongoose";

export async function POST(request) {
  try {
    await connectionToMongoDb();
    const { projectName, email } = await request.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const newProject = new Project({
      project: projectName,
      userId: user._id,
    });
    await newProject.save();
    return NextResponse.json(newProject, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to add project" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    await connectionToMongoDb();
    const user = await User.findOne({ email });
    const projects = await Project.find({ userId: user._id });
    return NextResponse.json(projects, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
