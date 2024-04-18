//Create a /weird route that passes name and title parameters to the app and prints the name and title parameters to the screen.

//Answer
const express = require("express");
const app = express();
const PORT = 3001;

app.get("/weird", (req, res) => {
  const { name, title } = req.query;
  res.send(`${name} and ${title}`);
});

app.listen(PORT, () => {
  console.log(`you listen to port ${PORT}`);
});
