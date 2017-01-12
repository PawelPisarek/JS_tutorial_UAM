var express = require('express');
var router = express.Router();

router.get('/*', (req, res, next) => {
    if (!req.query.authorized) {
        res.status(401).send('Niezalogowany!');
    } else {
        req.user = { sampleUser: true };
        next();
    }
});

module.exports = router;