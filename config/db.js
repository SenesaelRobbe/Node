module.exports = function(mysql) {
	const config = {
		host: "localhost",
		port : 33060,
		database: "homestead",
		user: "homestead",
		password: "secret",
		insecureAuth: true,
		debug: true
	};
	return mysql.createPool(config);
}
