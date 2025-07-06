import Project from "@/models/projectsModel";
import User from "@/models/userModel";
import Customer from "@/models/customerModel";
import { NextResponse } from "next/server";
import connectionToMongoDb from "@/libs/mongoose";

export async function GET(req) {
  try {
    await connectionToMongoDb();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing projectId" }, { status: 400 });
    }

    const customers = await Customer.find({ projectId: id });
    return NextResponse.json(customers, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch customers" },
      { status: 500 }
    );
  }
}
