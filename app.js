const { MongoClient } = require("mongodb");

// Connection to URI
const uri = "mongodb://localhost:27017";

// Database Name 
const dbName = 'fruitsDB';

//create a new MongoClient
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully to server')
    const db = client.db(dbName);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);