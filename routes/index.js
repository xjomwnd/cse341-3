const express = require('express');
const router = express.Router();

// Mounting routes
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;
