const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect(
  "mongodb+srv://fsprogadmn:4FBoKlOfKHWL1iC2@cluster0.tlbwcrv.mongodb.net/fall22?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

BlogPost.create(
  {
    title: "My second blog post",
    body: "This is actually just a CRUD test number 2",
    username: "nblier",
  },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);
