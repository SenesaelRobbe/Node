
const INSERT_ARTICLE = `insert into articles(title, body, author, category) VALUES ?`;
const INSERT_NEW_USER = `insert into login(userid, name, password, verified) VALUES ?`;
const USER_LOGIN = `SELECT * FROM users WHERE name = ?`;
const GET_ALL_DATA = `SELECT * FROM articles`;

module.exports = function(app, conn) {
	app.get('/login', (req, res) => {
		conn.query(USER_LOGIN, [req.body.name], (err, results, fields) => {
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
		conn.release();
	})

	app.post("/login", (req, res) => {
		conn.query(INSERT_NEW_USER, [req.body.userid, req.body.name, req.body.password, req.body.verified], (err, results, fields => {
			if(err) {
				return console.error(err.message);
			}
			conn.release();
		}));
		
	})

	app.post("/article", (req, res) => {
		conn.query(INSERT_ARTICLE, [req.body.title, req.body.body, req.body.author, req.body.category], (err, results, fields) => {
			if(err) {
				return console.error(err.message);
			}
			conn.release();
		})
	})
}