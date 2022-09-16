const express = require("express");

const app = express();
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "products",
});
const cors = require("cors");
app.post("/create", (req, res) => {
  const name = req.body.name;
  const sku = req.body.sku;
  const price = req.body.price;
  db.query(
    "INSERT INTO products (name,sku,price) VALUES(?,?,?)",
    [name, sku, price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

const mysql = require("mysql");
app.listen(3001, () => {
  console.log("ye");
});
