import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { dbConnectionPool } from './sql/database.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (request, response) => {
	console.log(dbConnectionPool);

	dbConnectionPool.query('SELECT * FROM consumeable', function (error, results, fields) {
		if (error) throw error;
		console.log('The solution is: ', results[0].solution);
	 });
});

app.listen(port, () => console.log(`API listening on port ${port}...`))