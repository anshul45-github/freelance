const { MongoClient } = require('mongodb');

export async function connectToDatabase() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);
  
  const dbName = 'users';
  
  await client.connect();
  console.log('Connected successfully to server');
  
  const db = client.db(dbName);
  const collection = db.collection('talents');
}