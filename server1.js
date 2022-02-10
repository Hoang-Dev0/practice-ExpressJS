const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const AccountModel = require("./models/account");
const accountRouter = require("./routers/account");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  AccountModel.findOne({ username }, (err, data) => {
    if (err) throw err;
    if (data) {
      console.log("tai khoang bi trung");
    } else {
      AccountModel.create(
        {
          username: username,
          password: password,
        },
        (err, data) => {
          if (err) throw err;
          else {
            console.log("tao account thanh cong");
          }
        }
      );
    }
  });
});

app.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  AccountModel.findOne(
    {
      username,
      password,
    },
    (err, data) => {
      if (err) res.status(500).json("server bi loi");
      if (data) {
        res.status(200).json("dang nhap thanh cong");
      } else {
        res.status(400).json("account k ton tai");
      }
    }
  );
});

app.use("/api/account", accountRouter);

app.listen(port, () => {
  console.log("localhost:" + port);
});



