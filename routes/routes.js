const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
router.get('/languages', apiController.languages);
router.get('/translate', apiController.translate);
router.get('/detect', apiController.detect);
router.get('/', apiController.index);

module.exports = router;
exports.router = router;
