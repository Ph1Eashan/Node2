const express = require('express');

const server = express();

const middleware1 = (req, res, next) => {
  console.log('Hello this is middleware 1');
  next();
};
const middleware2 = (req, res, next) => {
  console.log('Hello this is middleware 2');
  next();
};

server.use(middleware1);

let user = {
  name: 'Eashan',
  age: 23,
  email: 'eashanbanerji@gmail.com',
  contact: 8700599042,
  course: 'MERN',
  DOJ: '01-09-2021',
};

server.get('/', (req, res) => {
  res.send('<h1>Hellow world</h1>');
});
server.get('/user', middleware2, (req, res) => {
  res.send(user);
});

server.listen(3000, () => {
  console.log('server is running at port 3000');
});

//middlewares:::
//is a function,
//takes three parameter , req, res, next
// you can create multiple middleware
//why middleware :::
//hoc in react.
