const express = require("express");
const app = express();
// const port = process.env.PORT;
const path = require("path");
const AccountModel = require("./models/account");

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// app.use("/congkhai", express.static(path.join(__dirname, "public")));

const PAGE_LIMIT = 2;
app.get("/users", (req, res, next) => {
  let page = parseInt(req.query.page);
  if (page) {
    if (page < 1) {
      page = 1;
    }
    AccountModel.find({}, (err, data) => {
      AccountModel.countDocuments({}, (err, total) => {
        const totalPage = total / PAGE_LIMIT;
        res.status(200).json({
          totalPage: totalPage,
          data: data,
        });
      });
      if (err) res.status(500).json("loi server");
    })
      .skip((page - 1) * PAGE_LIMIT)
      .limit(PAGE_LIMIT);
  } else {
    AccountModel.find({}, (err, data) => {
      if (err) res.status(500).json("loi server");
      else {
        res.status(200).json(data);
      }
    });
  }
});

/****************************************************************** */

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
