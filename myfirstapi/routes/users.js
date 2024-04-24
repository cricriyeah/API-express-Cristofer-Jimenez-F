var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    name: 'cris',
    email: 'cris@gmail.com'
  },
  {
    id: 2,
    name: 'cris2',
    email: 'cris2@gmail.com'
  }
];

router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
  var newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id);
  var updatedUser = req.body;

  var index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    users[index] = updatedUser;
    res.json(updatedUser);
  } else {
    res.status(404).send("User not found");
  }
});

router.patch('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id);
  var updates = req.body;

  var index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    Object.assign(users[index], updates);
    res.json(users[index]);
  } else {
    res.status(404).send("User not found");
  }
});

module.exports = router;
