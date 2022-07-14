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


app.post('/consumables', (request, response)=> {			//Katalog Consumable erstellen
	const medical_product = [request.body.name,parseInt(request.body.manufacturer_id),request.body.webshop_id,request.body.rd_id]
	const name = request.body.name;
	const expires = request.body.expires;
	const manufacturer_id = request.body.manufacturer_id;
	const webshop_id = request.body.webshop_id;
	const rd_id = request.body.rd_id;
	response.send(name);
	con.query("INSERT INTO medical_product (name, manufacturer_id, webshop_id, rd_id) VALUES (?, ?, ?, ?)", medical_product , function (err, result) {
		if (err) throw err;
		console.log(result);
		console.log("consumable sucessfully created");
		const consumable = [request.body.expires,result.insertId,];
		con.query("INSERT INTO consumable (expires,medical_product_id) VALUES (?, ?)", consumable, function (err, result) {
			if (err) throw err;
			console.log(result);
			console.log("consumable sucessfully created");	
		})
	}
	
	)
	 
}
)
app.listen(port, () => console.log(`API listening on port ${port}...`))
