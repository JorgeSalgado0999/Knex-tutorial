// Update with your config settings.

import {DB_NAME, SQL_HOST, SQL_PASSWORD, SQL_USER} from "../helpers/constants";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
	// development: {
	// 	client: "sqlite3",
	// 	connection: {
	// 		filename: "./dev.sqlite3",
	// 	},
	// },

	development: {
		client: "postgresql",
		connection: {
			host: SQL_HOST,
			database: DB_NAME,
			user: SQL_USER,
			password: SQL_PASSWORD,
			port: 5432,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: "./migrations",
			tableName: "knex_migrations",
		},
	},

	// production: {
	// 	client: "postgresql",
	// 	connection: {
	// 		database: "my_db",
	// 		user: "username",
	// 		password: "password",
	// 	},
	// 	pool: {
	// 		min: 2,
	// 		max: 10,
	// 	},
	// 	migrations: {
	// 		tableName: "knex_migrations",
	// 	},
	// },
};
