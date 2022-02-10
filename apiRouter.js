const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("router 1 user Get");
});

router.post("/", (req, res) => {
  console.log(req.body.username);
  res.json("router 1 user Post");
});

router.put("/", (req, res) => {
  res.json("router 1 user Put");
});

router.delete("/", (req, res) => {
  res.json("router 1 user Delete");
});
// router.get("/:id", (req, res) => {
//   res.send("router 1" + req.params.id);
// });

module.exports = router;
