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
    insertDocuments(db)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const insertDocuments = function(db, callback) {
    //Get the doccuments collection
    const collection = db.collection('fruits');
    //insert some documents
    collection.insertMany([
        {name: "Apple", score: 8, review: "Great fruit"}, 
        {name: "Orange", score: 6, review: "kinda sour"}, 
        {name: "Banana", score: 9, review: "Great stuff!"}
    ], function(err, result) {
        console.log("inserted 3 documents into the collection");

    });
}