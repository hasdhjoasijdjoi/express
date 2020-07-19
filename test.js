const { Post } = require("./models/Post");
const config = require("./config/key");
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

Post.findOne({ title: "드디어!!" }, function (err, docs) {
  if (err) throw err;
  if (!docs) console.log("none");
  else {
    console.log(docs);
  }
});
