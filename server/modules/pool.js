const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

// quick console.log on connection
pool.on('connect', ()=>{
    console.log('PostSQL is connected!');
})

pool.on('error', (error)=>{
    console.log('Error with Postgres pool', error);
})

module.exports = pool;