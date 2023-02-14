const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const EmployeeRoute = require('./routes/employee');

mongoose.connect('mongodb://127.0.0.1:27017/myDB',{
   useNewUrlParser: true ,
   useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error' , (err) => {
  console.log(err);
})

db.once('open', () =>{
  console.log('Database Connection Established!');
})

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000

app.listen(PORT , ()=> {
  console.log(`server is running on port ${PORT}`);
})

app.use('/api/employee' , EmployeeRoute);


















































// const { MongoClient } = require("mongodb");
// Connection URI
// const uri = "mongodb://127.0.0.1:27017/myDB";
// Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
    // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
    // Establish and verify connection
//     await client.db("myDB").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
    // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

