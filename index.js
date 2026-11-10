import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'
import cors from "cors"
const app = express();
const PORT = 5000

app.use(cors())
app.use(express.json())

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const mongoClient = await connectToMongoDB()
const db = mongoClient.db("studioSpace")
const studioCollection = db.collection("Studios")
const bookingCollection = db.collection("bookingData")

app.post('/add-studio', async (req , res) => {
    const data = req.body
    const result = await studioCollection.insertOne(data)
    res.send(result)
    console.log(result)
    //http://localhost:5000/add-studio
})  




app.get('/allStudio', async (req, res) => {
    const { category, hostEmail } = req.query;

    const filter = {};

    if (category) {
        filter.category = category;
    }

    if (hostEmail) {
        filter.hostEmail = hostEmail;
    }

    const data = await studioCollection.find(filter).toArray();

    res.send(data);
});


app.get ('/allStudio/:id' , async (req , res) => {
    const id = req.params.id
    console.log(id)
    const data = await studioCollection.findOne({ _id: new ObjectId(id) })
    res.send(data)
})

app.post('/booking' , async (req , res) => {
  const data = req.body
  const result = await bookingCollection.insertOne(data)
  res.send(result)
  //http:/localhost:5000/booking
})

app.get('/booking', async (req, res) => {
  const data = await bookingCollection.find().toArray()
  res.send(data)
})


app.delete('/allStudio/:id', async(req , res)=> {
  const id = req.params.id
  const result = await studioCollection.deleteOne({
    _id: new ObjectId(id)
  })
  res.send(result)
})

app.patch('/allStudio/:id', async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    const filter = { _id: new ObjectId(id) };

    const updateDoc = {
        $set: updatedData
    };

    const result = await studioCollection.updateOne(
        filter,
        updateDoc
    );

    res.send(result);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT , () => {
    console.log(`server is running now in port at ${PORT}`)
});



