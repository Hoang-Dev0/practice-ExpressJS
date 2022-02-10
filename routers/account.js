const express = require("express");
const router = express.Router();
const AccountModel = require("../models/account");

router.get("/", (req, res, next) => {
  AccountModel.find({}, (err, data) => {
    if (err) res.status(500).json("Loi server");
    else {
      res.status(200).json(data);
    }
  });
});
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  AccountModel.findById(
    {
      _id: id,
    },
    (err, data) => {
      if (err) res.status(500).json("server bi loi");
      else {
        res.status(200).json(data);
      }
    }
  );
});
router.post("/", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  AccountModel.create(
    {
      username: username,
      password: password,
    },
    (err, data) => {
      if (err) res.status(500).json("loi server");
      else {
        res.status(200).json("them account thanh cong");
      }
    }
  );
});
router.put("/:id", (req, res, next) => {
  const newPassword = req.body.newPassword;
  const id = req.params.id;
  AccountModel.findByIdAndUpdate(
    {
      _id: id,
    },
    { password: newPassword },
    (err, data) => {
      if (err) res.status(500).json("server bi loi");
      else {
        res.status(200).json("cap nhat thanh cong");
      }
    }
  );
});
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  AccountModel.deleteOne({ _id: id }, (err, data) => {
    if (err) res.status(500).json("Loi server");
    else {
      res.status(200).json("xoa thanh cong");
    }
  });
});

module.exports = router;
