const express = require('express');
const router = express.Router();

router.use('/member', require("./Member"));

module.exports = router;
