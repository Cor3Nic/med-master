import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { con } from './database.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (request, response) => {

	con.query("SELECT * FROM consumable", function (err, result) {
		if (err) throw err;
		console.log("Result: " + result);
	 });
});

app.listen(port, () => console.log(`API listening on port ${port}...`))