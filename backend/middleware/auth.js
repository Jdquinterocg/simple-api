const jwt = require('jsonwebtoken');
const config = require('../config/env');

function authenticateToken(req, res, next) {
    const token = req.headers['authentication'];
    if (!token) return res.sendStatus(401); // No token provided

    jwt.verify(token, config.tokenSecret, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
