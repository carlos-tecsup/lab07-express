var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */

var curso = ""
var nivel = []
var pago = ""

router.get('/',  urlencodedParser,function(req, res, next) {
  res.render('index');
  
});
router.post('/modulos',urlencodedParser, function(req, res, next) {
  res.render('modulos');
  curso = req.body.cursos
  console.log(curso)

});
router.post('/pago',urlencodedParser, function(req, res, next) {
  res.render('pago');
  nivel.push(req.body.nivel) 
  
});
router.post('/detalles',urlencodedParser, function(req, res, next) {
  
  var monto = 0
  pago = req.body.pago
  var i = nivel.length
  console.log(i)
  
  switch (curso) {

    case curso = "JAVA":
      var i = nivel.length
      if(pago == "Tarjeta"){
        monto = 1200*i
      }else{
        descuento = 1200*i*0.1
        monto = (1200*i)-descuento
      }
      break;
    case curso = "PHP":
      var i = nivel.length
      if(pago == "Tarjeta"){
        monto = 800*i
      }else{
        descuento = 800*i*0.1
        monto = (800*i)-descuento
      }
      break;
    case curso = ".NET":
      var i = nivel.length
      if(pago == "Tarjeta"){
        monto = 1500*i
      }else{
        descuento = 1500*i*0.1
        monto = (1500*i)-descuento
      }
      break;
    default:
      break;
  }

  res.render('detalles', {curso,nivel,pago,monto});
  nivel.splice(0, nivel.length);

});
module.exports = router;
