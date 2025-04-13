const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://ashishw:<db_password>@cluster0.lbh2s9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const uri = "mongodb://localhost:27017";
const uri = "mongodb://ashish:111111@localhost:27017/college?authSource=college";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db('college')
    const students_collection = db.collection('students')

    const student = await students_collection.findOne({ name: 'Ram' });
    console.log(student);

    const add_student = await students_collection.insertOne({
        _id: 7,
        name: 'Thala',
        age: 28,
        email: 'thalaforareason@gmail.com'
    })
    console.log(add_student.insertedId);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
