const sql = require('mssql')
const dotEnv = require('dotenv').config()
const constants = require('../constants/constants')

module.exports.SQLDatabase = () => {
    return new Promise((resolve, reject) => {

        const request = pool2.request(); // or: new sql.Request(pool1)
    	const result = request.query('SELECT TOP 5 * FROM appoint')
    	console.dir(result)
        return resolve(result)
    })
};