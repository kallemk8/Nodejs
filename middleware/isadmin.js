const jwt = require('jsonwebtoken');

function isadmin(req, res, next){
    
    if(!req.user.isAdmin) return res.status(403).send('Access denied.');
    next()
}

module.exports = isadmin;