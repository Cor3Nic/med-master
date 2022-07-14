import { createPool } from 'promise-mysql';

const dbConnectionPool = async config => {
	return createPool({
		user: 'root',
		password: 'schremserbier',
		database: 'medmaster',
		socketPath: '/cloudsql/vocal-messenger-356106:europe-west3:medmaster-dev',
		...config
	});
};

export { dbConnectionPool };