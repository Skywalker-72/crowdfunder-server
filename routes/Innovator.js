const express = require('express');
const router = express.Router();
const { Innovator } = require("../models")

// signup as Innovator
router.post('/signup', async  (req, res) => {
    const payload = req.body;
    const user = await Innovator.create(payload);
    res.send(user)
})

module.exports = router;