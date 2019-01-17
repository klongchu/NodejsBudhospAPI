require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const SQLDatabaseConnected = require('./configs/database')
const userRoute = require('./routes/userRoute')
const sql = require('mssql')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// promise style:
const config = {
    user: 'sql2005',
    password: 'sql2005',
    server: '192.168.0.3',
    database: 'Patient4',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}


app.use((req, res, next) => {
    const pool2 = new sql.ConnectionPool(config).connect();
    next();
});

SQLDatabaseConnected.SQLDatabase()


app.use('/api/v1/user',userRoute.router)

app.use('/',(req,res,next) => {

    res.send('Hello From Buhosp API')
})

app.listen(process.env.SERVER_PORT, () => console.log(`Example app listening on port ${process.env.SERVER_PORT}!`))