import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Client from "@/lib/model/client.model";

export async function POST(request: Request) {
  const { clientObj } = await request.json();

  if (!clientObj) {
    console.error("Invalid data");
    return new NextResponse("Invalid data", { status: 400 });
  }

  await connectToDB();

  try {
    // Check if client exists
    const client = await Client.findOne({ email: clientObj.email });

    if (client) {
      console.log("Client already exists");
      return NextResponse.json(client, { status: 200 });
    }

    // Create new client
    const newClient = new Client({
      ...clientObj,
    });

    const savedUser = await newClient.save();

    if (!savedUser) {
      console.error("Failed to create user");
      return new NextResponse("Failed to create user", { status: 500 });
    }

    console.log("User created successfully");
    return NextResponse.json(JSON.stringify(savedUser), { status: 201 });
  } catch (error) {
    console.error("An error occurred:", error);
    return new NextResponse("An error occurred", { status: 500 });
  }
}