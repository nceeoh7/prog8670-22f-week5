const customValidate = (req, res, next) => {
  if (req.files == null || req.body.title == null || req.body.body == null) {
    console.log("Blog Post Invalid");
    return res.redirect("/posts/new");
  }
  next();
};

module.exports = customValidate;
