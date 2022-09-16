const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "products",
});
app.use(cors());
app.use(express.json());

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

app.listen(3001, () => {
  console.log("ye");
});
