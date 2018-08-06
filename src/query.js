const dbConnection = require('../database/db_connection.js');
dbConnection.connect()

const getData = (res) =>{
  return new Promise( (resolve, reject) => {

      dbConnection.query(`SELECT * FROM repos`, (err, res) => {
        if (err) reject ( new Error('Could not get data from DB') )
        resolve (res.rows)
      });

  })
    
};

const insertData = (name, id) => {
  return new Promise ( (resolve, reject) => {

    dbConnection.query(`INSERT INTO repos (reponame, id) VALUES ('${name}', '${id}');`, (err, res) => {
      if (err) reject ( new Error('Could not insert data into DB') )
      resolve(res)
    });

  })
  
};

module.exports = { getData, insertData };
