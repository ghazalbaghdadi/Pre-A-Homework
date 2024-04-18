//Q2. Create a route that redirects to '/about'

//Answer
const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.redirect("/about");
});

app.listen(PORT, () => {
  console.log(`you listen to port ${PORT}`);
});
