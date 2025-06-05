const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello Express app..." });
});

app.listen(8000, () => console.log("server started"));
