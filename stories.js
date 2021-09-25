const { MongoClient } = require("mongodb");
const http = require('http');
const url = "mongodb+srv://egg:egg@cluster0.gsu6g.mongodb.net/legendary_waffle_database?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
const dbName = "legendary_waffle_database";
const db = client.db(dbName);
// Use the collection "stories"
const col = db.collection("stories");

async function listen() {
    const server = http.createServer();
    console.log("created server");
    server.on("request", (request, response) => {
        console.log("RECIEVED A REQUEST");
        const { headers, method, url } = request;
        if (request.method === 'GET') { // GET request to recieve stories
            let body = [];
            request.on('error', (err) => {
                console.error(err);
            }).on('data', (chunk) => {
                body.push(chunk);
            }).on('end', async() => {
                try {
                    body = Buffer.concat(body).toString();
                    console.log("END");

                    response.on('error', (err) => {
                        console.error(err);
                    });

                    let JSONbody = JSON.parse(body);
                    console.log(JSONbody.tag);

                    await readStoriesFromDatabase(JSONbody.tag);
                    response.statusCode = 200;
                    response.setHeader('Content-Type', 'application/json');

                    const responseBody = { headers, method, url, body };

                    response.write(JSON.stringify(responseBody));
                    response.end();
                } catch (err) {
                    response.statusCode = 404;
                    response.end();
                }
            });
        }

        else if (request.method === 'POST') { // POST request to post a new story
            let body = [];
            request.on('error', (err) => {
                console.error(err);
            }).on('data', (chunk) => {
                body.push(chunk);
            }).on('end', async() => {
                try {
                    body = Buffer.concat(body).toString();
                    console.log("END");

                    response.on('error', (err) => {
                        console.error(err);
                    });

                    let JSONbody = JSON.parse(body);
                    console.log(JSONbody.text);
                    console.log(JSONbody.likes);
                    console.log(JSONbody.tags);
                    console.log(JSONbody.contact);
                    console.log(JSONbody.phone_number);

                    await putStoryInDatabase(JSONbody.text, JSONbody.likes, JSONbody.tags, JSONbody.contact, JSONbody.phone_number);
                    response.statusCode = 200;
                    response.setHeader('Content-Type', 'application/json');

                    const responseBody = { headers, method, url, body };

                    response.write(JSON.stringify(responseBody));
                    response.end();
                } catch (err) {
                    response.statusCode = 404;
                    response.end();
                }
            });
        }

        else {
            response.statusCode = 400; // bad request
            response.end();
        }
    }).listen(8080);
}

async function readStoriesFromDatabase(tag) {
    try {

        await client.connect();

        console.log("successfully connected to database");

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

    } catch (err) {

        console.log(err.stack);

    }

    finally {
        console.log("closing connection to database");
        await client.close();

    }
}

async function putStoryInDatabase(text, likes, tags, contact, phone_number) {
    try {

        await client.connect();

        console.log("successfully connected to database");

        // construct a document
        let story = {
            "text": text,
            "likes": likes,
            "tags": tags,
            "contact": contact,
            "phone_number": phone_number
        }

        // put it into the database
        await col.insertOne(story);

    } catch (err) {

        console.log(err.stack);

    }

    finally {

        console.log("closing connection to database");
        await client.close();

    }
}

listen().catch(console.dir);
