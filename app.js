const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3036',
    user: 'root',
    password: 'my-password',
    database: 'testdb'
});

connection.connect(function(err){
    if(err){
        console.log(err.code)
        console.log(err.fatal)
    }else{
        console.log("connected to host")
    }
});

$query = "SELECT * FROM user";

connection.query($query, function(err, rows, fields){
    if(err){
        console.log("An error occured with the query");
        return;
    }

    console.log("Query successfully executed");
});

connection.end(function(){
    console.log("Connection closed");
});