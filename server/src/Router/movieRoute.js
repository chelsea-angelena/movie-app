// const express = require('express');
// const router = express.Router();
// const API_KEY = process.env.API_KEY;
// const axios = require('axios');
// let q = 'wonder woman';

// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
// 	console.log('Time: ', Date.now());
// 	next();
// });

// // define the home page route
// router.get('/movies', async (req, res) => {
// 	await axiosCall()

// 	// res.send(JSON.stringify(response.data));
// 	res.send(data);
// });

// // define the route

// const axiosCall = async () => {

// 	try {

// 		let result  = 		await axios
// 			.get(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
// 			.then((data) => {
// 				res.body(data)
// 			});
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

// module.exports = router;
