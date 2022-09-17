const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "products",
});
app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
  const name = req.body.name;
  const sku = req.body.sku;
  const price = req.body.price;
  const kg = req.body.kg;
  const mb = req.body.mb;
  const width = req.body.width;
  const height = req.body.width;
  const length = req.body.length;
  // console.log(mb);
  // console.log(kg);
  console.log(price);
  console.log(sku);
  console.log(name);
  db.query(
    "INSERT INTO products (name,sku,price,kg,mb,width,height,length) VALUES(?,?,?,?,?,?,?,?)",
    [name, sku, price, kg, mb, width, height, length],
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

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// kg, mb, width, height, length
