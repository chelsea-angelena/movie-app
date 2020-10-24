const dotenv = require('dotenv').config();
const express = require('express');
const router = express('Router');

router.get('/react', (req, res) => {
	res.send(data);
});

router.post('/react', (req, res) => {
	console.log(req.body);
	res.send('recieved your search input request');
});

module.exports = router;
