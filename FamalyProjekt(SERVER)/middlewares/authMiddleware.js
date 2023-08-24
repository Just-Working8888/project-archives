const jwt = require("jsonwebtoken");
const secretKey = "mySuperSecretKey123"; // Замените на свой секретный ключ

function authenticateToken(req, res, next) {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Token not provided" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Unauthorized: Invalid token" });
    }

    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};
