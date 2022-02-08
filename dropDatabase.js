'use strict';

const Database = require('./database');

let file = './createStatements.json';

if (process.argv.length>2){
    file=`./${process.argv[2]}`;
}
try{
    dropDatabase(require(file));
}
catch (error){
    console.log(`Error: ${error.message}`)
}

async function dropDatabase(statements){
    const dropOptions = {
        host: statements.host,
        port: statements.port,
        user: statements.admin,
        password: statements.adminpassword
    };

    const dropDatabaseSql = `drop database if exists ${statements.database}`;
    const dropUserSql = `drop user if exists '${statements.user}'@'${statements.host}'`;

    const db = new Database(dropOptions);
    try{
        const sqls = [];
        sqls.push(db.doQuery(dropDatabaseSql));
        if(statements.dropUser){
            sqls.push(db.doQuery(dropUserSql));
        }
        await Promise.all(sqls);
        console.log('done');
    }
    catch(error){
        console.log(error);
    };
};