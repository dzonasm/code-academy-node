const testMiddleWare = (req, res, next) => {
  console.log("this is the middleware");
  req.body.test = "Changed by middleware";
  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("im firing");
  req.body.content = req.body.content.toUpperCase();
  next();
};

module.exports = {
  testMiddleWare,
  secondMiddleware,
};
