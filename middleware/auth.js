const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied. No token provided');
    try{
        const decoder = jwt.verify(token, 'jwtPrivateKey');
        req.user = decoder;
        next();
    }catch (ex) {
        res.status(401).send('Invalid Token');
    }
}

module.exports = auth;