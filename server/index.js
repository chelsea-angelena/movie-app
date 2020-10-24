const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const movieList = require('./data/movieList.json');

const port = process.env.PORT || process.argv[2] || 8080;
const fs = require('fs');
const { send } = require('process');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;

// prep json file
function movieListReady(movieArr) {
	return {
		movies: movieArr,
	};
}

// write to json file
function writeJSONFile(data) {
	return (data) => {
		const utf8data = data.toString('utf8');
		const jsonData = JSON.parse(utf8data);
		movieList = jsonData.data;
		const stringData = JSON.stringify(movieListReady(data));
		fs.writeFile('./data/movieList.json', stringData);
	};
}

app.get('/', (req, res) => {
	if (req.query.newThing) {
		res.send(req.query);
		return;
	}
	res.status(418).send(movieList);
});

app.get('/movies', (req, res) => {
	res.send(movieList);
});

app.listen(port, () => {
	console.log(`Listening on ${port} @ ${dateTime}`);
});
