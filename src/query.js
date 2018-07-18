const dbConnection = require('../database/db_connection.js');
dbConnection.connect()

const getData = (cb) =>{
  return new Promise( (resolve, reject) => {

      dbConnection.query(`SELECT * FROM repos`, (err, res) => {
        if (err) reject ( cb(err) )
        resolve (cb(null, res.rows) )
      });

  })
    
};

const insertData = (name, cb) => {
  dbConnection.query(`INSERT INTO repotest (name) VALUES (${name} )`, (err, res) => {
    if (err) return cb(err)
    return cb(null, res)
  });
};

module.exports = { getData, insertData };
