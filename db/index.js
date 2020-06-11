var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cowlist',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

let createCowTable = `create table if not exists cows(id int primary key auto_increment,name varchar(255) not null,description varchar(255) not null);`;

connection.query(createCowTable, (err, results, fields) => {
  if (err) throw err;
  console.log('table successfully created!');
});

let insertCow = (name, description) => {
  connection.query(
    `insert into cows (name, description) values ('${name}', '${description}')`,
    (err, results, fields) => {
      if (err) throw err;
    }
  );
};

connection.end(() => {
  console.log();
});
