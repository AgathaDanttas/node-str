'use strict'

const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.pi0rkgu.mongodb.net/`);

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.log("Error connecting to with database mongoDB");
    });

    connection.on("open", () => {
        console.log("Connected mongoDb sucessfully!");
});
}

connect();

module.exports = mongoose;