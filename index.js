const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const BlogPost = require("./models/BlogPost");
const fileUpload = require("express-fileupload");
const customValidate = require("./middlewares/customValidate");

const app = new express();

app.use(fileUpload());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/posts/store", customValidate);
app.set("view engine", "ejs");

mongoose.connect("YOUR MONGO DB CONNECTION STRING GOES HERE", {
  useNewUrlParser: true,
});

const port = 4000;

app.get("/", async (req, res) => {
  const blogPosts = await BlogPost.find({});
  console.log(blogPosts);
  res.render("index", { blogPosts });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post/:id", async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);
  res.render("post", { blogPost });
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", async (req, res) => {
  let image = req.files.image;

  image.mv(path.resolve(__dirname, "public/img", image.name), async (error) => {
    await BlogPost.create({ ...req.body, image: "/img/" + image.name });
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log("App Listening on Port " + port);
});
