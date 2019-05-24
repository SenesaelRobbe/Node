
const sql = `insert into articles(title, body, author, category) VALUES ?`;
const addUserSql = `insert into login(userid, name, password, verified) VALUES ?`;
const logUserInSql = `SELECT * WHERE name = ?`;

module.exports = function(app, conn) {

	app.get('/login', (req, res) => {
		conn.query(logUserInSql, [req.body.name], (err, results, fields) => {
			if(!err) {
				if(fields[0].password === req.body.password){
					return true;
				} else {
					return false;
				}
			} else {
				return {data: "Something went wrong while connecting to the database"};
			}
		})
	})

}

// module.exports = function(app, db) {

// 		app.post('/login', (req, res) => {
// 			connection.query(addUserSql, [req.body.userid, req.body.name, req.body.password, req.body.verified]);
// 			if(err) return console.error(err.message);
// } )
// 		app.get('/login', (req, res) => {
// 			connection.query(logUserInSql, [req.body.name], (err, results, fields) => {
// 			if(!err) {
// 				if(results[0].password === req.body.password) {
// 					return (true).toJson;
// 				} else {
// 					return (false).toJson;
// 						}
// 			} else {
// 				console.error(err);
// }
// 		})
// })
// 		app.post("/article", (req, res) => {
// 			connection.query(sql, [req.body.title, req.body.body, req.body.author, req.body.category], (err, results, fields) => {
// 		if(err) {return console.error(err.message);}
// 			})
// 		});
// };
