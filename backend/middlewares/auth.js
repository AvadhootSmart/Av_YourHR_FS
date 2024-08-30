const JWT = require("jsonwebtoken")
const secretKey = "jai shree ram"


const authenticateJWT = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send("Not authorized, Access denied");
    }

    const token = authHeader.split(' ')[1];
    JWT.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).send("Invalid or expired token");
        }

        req.user = user;
        next();
    });
};

module.exports = authenticateJWT;
