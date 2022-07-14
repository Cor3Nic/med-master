import express, { request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { con } from './database.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/test', (request, response) => {
	response.send("Test");
	});

app.get('/consumable', (request, response) => {

	con.query("SELECT * FROM consumable", function (err, result) {
		if (err) throw err;
		console.log("Result: " + result);
	 });
});

app.listen(port, () => console.log(`API listening on port ${port}...`))

app.post('/consumables', (request, response)=> {
	const consumable = request.body.name;
	const expires = request.body.expires;
	const manufacturer_id = request.body.manufacturer_id;
	const webshop_id = request.body.webshop_id;
	const rd_id = request.body.rd_id;

}
)

