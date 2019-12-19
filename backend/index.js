require('dotenv').config();

const app = require('express')();
const port = 3000;

const mysql = require('mysql');
const Promise = require('bluebird');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
	host: process.env.DB_HOST || '',
	user: process.env.DB_USER || '',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || ''
});

connection.connect((err) => { if (err) { throw err; }});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

function create(title = '', text = '') {
	return new Promise((resolve, reject) => {
		const sql = 'INSERT INTO crud (title, text) VALUES ' + '("' + title + '", "' + text + '");';

		connection.query(sql, (err, results) => {
			if (err) { reject(err); }
			resolve(JSON.stringify({ id: results.insertId, title, text }));
		});
	})
}

function retrieve() {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM crud', (err, results) => {
			if (err) { reject(err); }
			resolve(JSON.stringify(results));
		});
	})
}

function update(id, title, text) {
	return new Promise((resolve, reject) => {
		const titleStatement = (title) ? '"title" = "' + title + '"' : '';
		const textStatement = (text) ? '"text" = "' + text + '"' : '';

		if (titleStatement || textStatement) {
			let sql = 'UPDATE crud SET ';

			if (titleStatement && textStatement) {
				sql += titleStatement + ', ' + textStatement;
			} else if (titleStatement && !textStatement) {
				sql += titleStatement;
			} else if (!titleStatement && textStatement) {
				sql += textStatement;
			}

			connection.query('UPDATE crud SET ' + id + ' WHERE "id = "' + id, (err, results) => {
				if (err) { reject(err); }
				resolve(JSON.stringify(results))
			});
		}

		reject('Invalid Parameters');
	});
}

function remove(id) {
	return new Promise((resolve, reject) => {
		connection.query('DELETE FROM crud WHERE "id" = ' + id, (err, results) => {
			if (err) { reject(err); }
			resolve(JSON.stringify(results))
		});
	});
}

app.get('/', (_request, response) => {
	response.end('Express-Angular API Middleware')
});

app.get('/api', (_request, response) => {
	retrieve()
		.then((result) => {
			response.setHeader('Content-Type', 'application/json');
			response.end(result);
		}).catch(() => response.status(500).end('Internal Server Error'));
});

app.post('/api', (request, response) => {
	create(request.body.title, request.body.text)
		.then((result) => {
			response.setHeader('Content-Type', 'application/json');
			response.end(result);
		}).catch(() => response.status(500).end('Internal Server Error'));
});

app.listen(port);
