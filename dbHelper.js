const mysql = require('mysql2/promise');

(async (dbHelper) => {
    let dbClient = null;
    let tranConn = null;
    dbHelper.init = async () => {
        try {
            if (!dbClient) {
                dbClient = await mysql.createPool({
                    host: process.env.MYSQL_DB_HOST,
                    user: process.env.MYSQL_DB_USER,
                    database: process.env.MYSQL_DB_NAME,
                });
            }
            // console.log(dbClient);
            return dbClient;
        }
        catch (error) {
            throw error;
        }
    }

    dbHelper.query = async (req) => {
        console.log(req);
        const res = dbClient.query(
            req
        )
        return res;
    }
})(module.exports)