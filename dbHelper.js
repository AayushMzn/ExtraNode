(async (dbHelper) => {
    let dbClient = null;
    let tranConn = null;
    dbHelper.init = async () => {
        try {
            if (!dbClient) {
                dbClient = await mysql.createConnection({
                    host: process.env.MYSQL_DB_HOST,
                    user: process.env.MYSQL_DB_USER,
                    database: process.env.MYSQL_DB_NAME
                });
            }
            return dbClient;
        }
        catch (error) {
            throw error;
        }
    }

    dbHelper.query1 = async (reqs) => {
        console.log(reqs);
        const res = dbClient.query(
            reqs
        )
        return res;
    }
})(module.exports)