"use strict";

module.exports = type => {
  if (type == "Before") {
    return (req, res, next) => {
      logger.info(
        "Before: %s: %s |~%s~|",
        req.method,
        req.url,
        JSON.stringify(req.query)
      );
      return next();
    };
  } else {
    return (req, res, next) => {
      logger.info(
        "After: %s: %s |~%s~|",
        req.method,
        req.url,
        JSON.stringify(req.query)
      );
      return next();
    };
  }
};
