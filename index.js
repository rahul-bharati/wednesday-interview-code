const express = require("express");
const bodyParser = require("body-parser");
const { chunkMessage } = require("./helper");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

app.post("/tweet", (req, res) => {
  const {
    body: { text },
  } = req;
  res.send(chunkMessage(text));
});

app.listen(3000, () => {
  console.info("App listening on port 3000");
});
