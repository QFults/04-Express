const inquirer = require('inquirer')
const mysql = require('mysql2')
require('console.table')

const db = mysql.createConnection('mysql://root:rootroot@localhost/restaurant_db')

const viewMenu = () => {
  db.query('SELECT * FROM menu', (err, menu) => {
    if (err) { console.log(err) }
    console.table(menu)
    mainMenu()
  })
}

const addItem = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the new menu item?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the new menu item:'
    },
    {
      type: 'number',
      name: 'price',
      message: 'What is the new menu item price?'
    }
  ])
    .then(item => {
      db.query('INSERT INTO menu SET ?', item, err => {
        if (err) { console.log(err) }
        console.log('New Menu Item Added!')
        mainMenu()
      })
    })
}

const mainMenu = () => {
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['View Menu', 'Add Menu Item']
  })
    .then(({ action }) => {
      switch (action) {
        case 'View Menu':
          viewMenu()
          break
        case 'Add Menu Item':
          addItem()
          break
      }
    })
    .catch(err => console.log(err))
}

mainMenu()