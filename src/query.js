const dbConnection = require('../database/db_connection.js');
dbConnection.connect()

const getData = (res) =>{
  return new Promise( (resolve, reject) => {

      dbConnection.query(`SELECT * FROM repos`, (err, res) => {
        if (err) reject ( new Error('Could not carry out query') )
        resolve (res.rows)
      });

  })
    
};

const insertData = (name, cb) => {
  dbConnection.query(`INSERT INTO repos (reponame) VALUES (${name} )`, (err, res) => {
    if (err) return cb(err)
    return cb(null, res)
  });
};

module.exports = { getData, insertData };
