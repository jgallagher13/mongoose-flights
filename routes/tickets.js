var express = require('express');
var router = express.Router();
const ticketCtrl = require('../controllers/tickets')

router.get('/tickets/new', ticketCtrl.new)
router.post('/tickets', ticketCtrl.create)
router.post('/flights/:id/tickets', ticketCtrl.addTicket)

module.exports = router