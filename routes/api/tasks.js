const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send('task route')
})

module.exports = router