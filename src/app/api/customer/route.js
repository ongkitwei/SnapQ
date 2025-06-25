import Customer from "@/models/customerModel";
import { NextResponse } from "next/server";
import connectionToMongoDb from "@/libs/mongoose";

export async function POST(request) {
  try {
    await connectionToMongoDb();
    const {
      customerName,
      customerNumber,
      customerEmail,
      customerStrength,
      projectId,
    } = await request.json();

    const newCustomer = new Customer({
      customerName: customerName,
      customerNumber: customerNumber,
      customerEmail: customerEmail,
      customerStrength: customerStrength,
      projectId: projectId,
    });
    await newCustomer.save();
    return NextResponse.json(newCustomer, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to add customer" },
      { status: 500 }
    );
  }
}
