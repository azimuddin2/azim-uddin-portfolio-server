const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());


// database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.line7or.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

    }
    finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('AU Portfolio Server Running!')
});

app.listen(port, () => {
    console.log(`AU Portfolio app listening on port ${port}`)
});