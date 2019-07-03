exports.myMiddleware = (req, res, next) => {
  req.name = 'Jordan';
  next();
};

exports.homePage = (req, res) => {
  res.render('index');
};
