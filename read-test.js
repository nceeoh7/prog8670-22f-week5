const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect(
  "mongodb+srv://fsprogadmn:4FBoKlOfKHWL1iC2@cluster0.tlbwcrv.mongodb.net/fall22?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

BlogPost.find({}, (error, blogpost) => {
  console.log(error, blogpost);
});
