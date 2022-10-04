const express = require('express');
const orderController = require('../controllers/order');

const router = express.Router();

router.get('/', orderController.list);
router.post('/create', orderController.create);

module.exports = router;
