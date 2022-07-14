import mysql from "mysql"

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'medmaster'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export { con };