import express from 'express';
import { MongoClient } from 'mongodb';
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

app.post('/add-studio', async (req , res) => {
    const data = req.body
    const result = await studioCollection.insertOne(data)
    res.send(result)
    console.log(result)
    //http://localhost:5000/add-studio
})  



app.get('/allStudio' , async (req , res)=>{
    const data = await studioCollection.find().toArray()
    res.send(data)
    //http://localhost:5000/allStudio
})



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT , () => {
    console.log(`server is running now in port at ${PORT}`)
});