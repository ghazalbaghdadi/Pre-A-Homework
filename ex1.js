// Q1.Handle a POST request to the route '/submit' with the provided data
const data = { username: "example", password: "password" };

//Answer

const express = require("express");
const app = express();
const PORT = 3001;

app.post("/submit", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`you listen to port ${PORT}`);
});
