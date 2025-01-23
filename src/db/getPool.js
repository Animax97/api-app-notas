import mysql from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config()

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env

let pool

// Create the connection pool. The pool-specific settings are the defaults
const getPool = async () => {
	try {
		if (!pool) {
			const poolTemp = mysql.createPool({
				host: MYSQL_HOST,
				user: MYSQL_USER,
				password: MYSQL_PASS
			})

		await poolTeam.query(`CREATE DATABASE IF NOT EXIST ${MYSQL_DB}`)

			// pool = mysql.createPool(
        const pool = mysql.createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        waitForConnections: true,
        connectionLimit: 10,
        timezone: 'Z',
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
        });
        }

        return pool
    } catch (error) {
        console.log(error)
    }
}
export default getPool
    