const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri ="mongodb+srv://admin:I652yNxUbgO1wKVI@csweb.aiep8lc.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('csweb');
    const movies = database.collection('blog');

    // Query for a movie that has the title 'Back to the Future'
    const query = { b_id : 1 };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);