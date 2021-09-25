const { MongoClient } = require("mongodb");
const url = "mongodb+srv://egg:egg@cluster0.gsu6g.mongodb.net/legendary_waffle_database?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
const dbName = "legendary_waffle_database";
const db = client.db(dbName);
// Use the collection "stories"
const col = db.collection("stories");

async function connect() {

    try {

        await client.connect();

        console.log("Connected correctly to server");

        await insert("I am anxious", 23, false, null);

        await read("anxiety");

    } catch (err) {

        console.log(err.stack);

    }

    finally {

        await client.close();

    }
}

async function insert(text, likes, tags, contact, phone_number) {

    // Construct a document
    let storyDocument = {

        "text": text,
        "likes": likes,
        "tags": ["anxiety", "depression"],
        "contact": contact,
        "phone_number": phone_number

    }

    // Insert a single document
    const p = col.insertOne(storyDocument);
}

async function read(tag) {

    // query for stories whose "tags" array includes the given tag
    const query = {
        tags: tag
    };
    // sort in descending (-1) order by likes
    const sort = { likes: -1 };

    // find stories matching the query
    const cursor = col.find(query).sort(sort);

    // print the resulting stories
    await cursor.forEach(console.dir);
    // Find one document
    const myDoc = await col.findOne();

    // Print to the console
    console.log(myDoc);
}

connect().catch(console.dir);
