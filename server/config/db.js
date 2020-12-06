const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  port: 3306,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

const connectDummy = () => {
  console.log("connectDummy");
  connection.query(`select 1;`, (error, rows) => {
      // none..
  });
}
const sendPingDB = () => {
  console.log("sendPingDB");
  connectDummy();
  setTimeout(sendPingDB, 20000000);
}
const startSendPingDB = () => {
  console.log("startSendPingDB");
  setTimeout(sendPingDB, 20000000);
}
startSendPingDB();
module.exports = connection;