const inq = require('inquirer');

const mysql = require('mysql2');
const { type } = require('os');
const connection = mysql.createConnection({
    host: "localhost",
    // Your usernam
    user: "root",
    // Your password
    password: "Anthony22!",
    database: "employees"
  });

  inq.prompt(
    [{
        message: 'What would you like to do?',
        type: 'list',
        name: 'choice',
        choices:[
            'view all employeees',
            'add employee',
            'view all roles ',
            'view all departments',
        ]
    }]
  ).then((answers) => {
    switch(answers.choice){
        case  'view all employeees':{
            console.log('nfne')
            connection.query('select * from employee', (err, data ) => {
                console.log(data)
            });
            break;
        }
        case  'view all departments':{
            console.log('nfne')
            connection.query('select * from department ', (err, data ) => {
                console.log(data)
            });
            break;
        }
        case  'view all roles ':{
            console.log('nfne')
            connection.query('select * from role', (err, data ) => {
                console.log(data)
            });
            break;
        }
    }
  })
