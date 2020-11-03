var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/modulos', function(req, res, next) {
  res.render('modulos');
});
router.get('/pago', function(req, res, next) {
  res.render('pago');
});
router.get('/detalles', function(req, res, next) {
  res.render('detalles');
});
module.exports = router;
