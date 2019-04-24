const connection = require('../connection.js');
const getUser = (email)=>connection.query(`SELECT * FROM users WHERE email = $1`, [email]);
module.exports= getUser;
