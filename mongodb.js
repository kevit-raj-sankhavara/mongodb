const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectID } = mongodb;

const url = "mongodb://127.0.0.1:27017";
const database = "task-manager";

// Creating id using ObjectID
// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(url, (error, client) => {
    if (error)
        return console.log(error);

    const db = client.db(database);

    db.collection("tasks").find({ completed: true }).toArray((err, tasks) => {
        console.log(tasks);
    });
})