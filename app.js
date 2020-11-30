const mysql = require('mysql2')

const db = mysql.createConnection('mysql://root:rootroot@localhost/users_db')

db.query('SELECT * FROM users', (err, users) => {
  if (err) { console.log(err) }

  console.log(users)
})