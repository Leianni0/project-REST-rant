const router = require('express').Router()

// ToDo: Make places routes here
router.get('/',(req, res) => {
    res.send('GET places list');
});

module.exports = router;
