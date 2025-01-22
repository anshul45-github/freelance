import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

export async function POST(req: Request) {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // Select the database and collection
    const db = client.db('myProject');
    const collection = db.collection('talents');

    // Parse the request body
    const body = await req.json();
    const { name, phone, description, skills } = body;

    // Insert the document into the collection
    const result = await collection.insertOne({ name, phone, description, skills });

    // Return the result
    return new NextResponse(JSON.stringify(result), { status: 201 });
  } catch (error) {
    console.error('Error saving data:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  } finally {
    // Close the connection
    await client.close();
  }
}