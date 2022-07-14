import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { con } from './sql/database.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (request, response) => {
	console.log(con);

	con.query("SELECT * FROM consumeable", function (err, result) {
		if (err) throw err;
		console.log("Result: " + result);
	 });
});

app.listen(port, () => console.log(`API listening on port ${port}...`))