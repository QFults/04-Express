const mysql = require('mysql2')

const db = mysql.createConnection('mysql://root:rootroot@localhost/users_db')

// db.query('SELECT * FROM users', (err, users) => {
//   if (err) { console.log(err) }
//   console.log(users)
// })

// db.query('INSERT INTO users SET ?', {
//   name: 'Jolene Doe',
//   email: 'jolenedoe@gmail.com',
//   age: 47,
//   address: '123 Main St'
// }, err => {
//   if (err) { console.log(err) }
//   console.log('added!')
// })

// db.query('DELETE FROM users WHERE ?', { name: 'Jolene Doe' }, err => {
//   if (err) { console.log(err) }
//   console.log('deleted!')
// })

// db.query('UPDATE users SET ? WHERE ?', [
//   { age: 49 },
//   { name: 'Jane Doe' }
// ],err => {
//   if (err) { console.log(err) }
//   console.log('updated!')
// })
