
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./env');
const uri = config.dbUrl;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Conectado a MongoDB');
        // return client.db("admin");
        return client.db("NetForemost");
    } catch (error) {
        console.error("Error connecting")
    }
}

module.exports = connectToDatabase;