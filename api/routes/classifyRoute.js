const express = require('express');
const router = express.Router();
const classifyNumber = require('../controllers/classifyNumber');



router.get('/api/classify-number', classifyNumber);

module.exports = router;