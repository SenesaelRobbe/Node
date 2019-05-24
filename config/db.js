module.exports = function(mysql) {
	const config = {
		host: "localhost",
		port : 3306,
		database: "homestead",
		user: "homestead",
		password: "secret",
		insecureAuth: true,
		debug: true,

	};
	return mysql.createConnection(config).connect((err) => {
		if (err) {
			console.log(err.stack);
		}
	});
}
