const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  // Once connected, you can use the database object
  const db = client.db('your-database-name');
  
  // Now you can perform operations using `db` object
  db.collection('your-collection-name').findOne({ /* query */ }, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log(result);
  });

  // Don't forget to close the connection when done
  client.close();
});
