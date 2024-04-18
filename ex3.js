//Create a /who route that passes a name parameter to the app and prints the name parameter to the screen.
// hint: use req.params

//Answer
const express = require("express");
const app = express();
const PORT = 3001;

app.get("/who/:name", (req, res) => {
  const { name } = req.params;
  res.send(name);
});

app.listen(PORT, () => {
  console.log(`you listen to port ${PORT}`);
});
