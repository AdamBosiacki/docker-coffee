const { Client } = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded(
  {
     extended: true 
  }))
app.use(bodyParser.json())

const client = new Client({
  password: "root",
  user: "root",
  host: "postgres",
});

app.use(express.static("public"));

app.get("/coffee", async (req, res) => {
  const results = await client.query("select * from coffee").then((payload) => {
      return payload.rows;
  });
  console.log(results);
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(results));
});

app.post('/addCoffee', function (req, res) {
  client.query(`insert into coffee (name, title, coffe, milk, other) values ('${req.body.nam}','${req.body.des}','${req.body.cof}','${req.body.mil}','${req.body.oth}')`, function (err, result) {
    if (err)
        throw err;
    console.log(result);
    res.end(JSON.stringify(result));
});
;
});

(async () => {
  await client.connect();
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
})();