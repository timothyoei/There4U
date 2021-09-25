const { MongoClient } = require("mongodb");
const url = "mongodb+srv://egg:egg@cluster0.gsu6g.mongodb.net/legendary_waffle_database?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
const dbName = "legendary_waffle_database";

 async function run() {

    try {

         await client.connect();

         console.log("Connected correctly to server");

         const db = client.db(dbName);

         // Use the collection "stories"

         const col = db.collection("stories");

         // Construct a document
         
         let storyDocument = {

             "text": "I am struggling today",

             "likes": 0,

             "contact": true,

             "phone_number": 4071234567

         }

         // Insert a single document, wait for promise so we can read it back

         const p = await col.insertOne(storyDocument);

         // Find one document

         const myDoc = await col.findOne();

         // Print to the console

         console.log(myDoc);

        } catch (err) {

         console.log(err.stack);

     }

 

     finally {

        await client.close();

    }

}

run().catch(console.dir);
