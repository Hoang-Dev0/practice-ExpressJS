const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.use("/congkhai", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("listening on port 3000");
});
