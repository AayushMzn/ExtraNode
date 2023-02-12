(async(dbHelper) => {
    let dbClient = null;
    let tranConn = null;
    dbHelper.init = async () => {
        try {
            if (!dbClient) {
                dbClient =await mysql.createConnection({
                    host: process.env.MYSQL_DB_HOST,
                    user: process.env.MYSQL_DB_USER,
                    database: process.env.MYSQL_DB_NAME
                });
            }
            return dbClient;
        }
        catch(error){
            throw error;
        }
    }

    dbHelper.query = async () => {
        // dbClient.query(
        // 'INSERT INTO login VALUES 
        // (?,?,?)', [req.body.topic, req.body.note, req.body.resource],(error, 
        // results) => {
        //    if (error) return res.json({ error: error });
      
        // });
    }
})(module.exports)