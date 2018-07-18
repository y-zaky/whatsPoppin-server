const dbConnection = require('../database/db_connection.js');

const getData = (cb) =>{
  dbConnection.connect()
    .then(console.log('db connection successfull'))
    dbConnection.query(`SELECT * FROM repos`
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
