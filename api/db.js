import mysql from "mysql";

export const db = mysql.createConnection({
    host: '127.0.0.1',
    user: "root",
    password: "root123",
    database: "blognode"
});

db.connect(function (err) {
    if (err) { 
        console.log(err);
    } else {
        console.log("Connected to db");
    }
})