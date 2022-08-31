const fs= require('fs');
const path = require('path');
const connection = require('./connection')

const dbbulit = () => {
    const db = fs.readFileSync(path.join(__dirname, 'fakedata.sql')).toString();
    return connection.query(db);
  };

module.exports = dbbulit