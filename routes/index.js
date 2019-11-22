var express = require('express');
var router = express.Router();

const send = require('gmail-send')({
  user: 'poliaulink@gmail.com',
  pass: 'politecnico',
  to:   'oscarmesa.elpoli@gmail.com',
  subject: 'test subject',
});
//test http://localhost:3000/
/* GET home page. */
router.get('/', function(req, res, next) {

  send({
    text:    'Esta es una prueba de envio',  
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
    res.render('index', { title: 'Correco enviado exitosamente. Salida: ' + result });
  })

  
});

module.exports = router;
