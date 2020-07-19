const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.post("/new", (req, res) => {
  const post = new Post(req.body); // req.body에 특정 user의 _id 를 받아와야한다. , findByToken을 이용하여 user를찾고 그 user의 _id값을 집어넣자.
  post.save((err, post) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.get("/getAllPosts", (req, res) => {
  Post.find({}, function (err, posts) {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json(posts);
  });
});

router.post("/getPost", (req, res) => {
  Post.findOne({ title: req.body.title }, function (err, docs) {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json(docs);
  });
});

module.exports = router;
