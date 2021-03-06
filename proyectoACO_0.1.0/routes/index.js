var express = require('express');
var router = express.Router();
var reclamoController = require('../controllers/reclamoController');

/* GET home page. */
router.get('/',reclamoController.principal);
router.get('/registroReclamo', reclamoController.registroReclamo);
router.post('/guardarReclamo', reclamoController.guardarReclamo);
router.post('/buscaReclamo', reclamoController.buscaReclamo);
module.exports = router;
