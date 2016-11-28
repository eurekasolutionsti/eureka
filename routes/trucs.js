/**
 * Created by Phil on 2016-11-28.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('trucs', { title: 'Eureka Solutions TI' });
});

module.exports = router;