const express = require("express");
const bodyParser = require("body-parser");

const mysql = require('mysql');
const db = require("./config/db")(mysql);

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
require("./app/routes/note_routes")(app, db);

const port= 8090;
app.listen(port, () => console.log("We are live on " + port));
