const express = require('express');
const router = express.Router();

const member = require('../controllers').Member;

router.get('/find_all', member.findAll);

router.post('/create', member.create);

module.exports = router;