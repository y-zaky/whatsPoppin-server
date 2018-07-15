const dbConnection = require('../database/db_connection.js');

const getData = (cb) =>{
    dbConnection.query(`SELECT * FROM repotest`
    , (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};

const insertData = (name, cb) => {
  dbConnection.query(`INSERT INTO repotest (name) VALUES (${name} )`, (err, res) => {
    if (err) return cb(err)
    return cb(null, res)
  });
};

module.exports = { getData, insertData };
