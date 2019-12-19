const express = require('express');
const app = express();

const path = __dirname + '/dist';
const port = 4200;

app.use(express.static(path));
app.get('*', function(_req, res) {
	res.sendFile(path + '/index.html');
});

app.listen(port);
