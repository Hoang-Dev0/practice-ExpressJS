const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const router = require("./apiRouter");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/admin/api/v1/", router);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/about", (req, res) => {
//   res.send("about");
// });

app.listen(port, () => {
  console.log("server started on port" + port);
});
