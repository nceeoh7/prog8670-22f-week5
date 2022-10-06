const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect(
  "mongodb+srv://fsprogadmn:4FBoKlOfKHWL1iC2@cluster0.tlbwcrv.mongodb.net/fall22?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

var id = "63345f158b7e6f034d9d8b75";

BlogPost.findByIdAndUpdate(
  id,
  { title: "Updated Title" },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);
