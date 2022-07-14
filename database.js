import { createPool } from 'promise-mysql';

const dbConnectionPool = await createPool({
	user: 'root',
	password: 'schremserbier',
	database: 'medmaster',
	socketPath: '/cloudsql/vocal-messenger-356106:europe-west3:medmaster-dev',
});

export { dbConnectionPool };