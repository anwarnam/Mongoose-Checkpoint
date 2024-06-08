const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const removeManyPeople = () => {
  const nameToRemove = "Mary";

  Person.remove({ name: nameToRemove }, (err, result) => {
    if (err) return console.error(err);
    console.log(result);
  });
};

removeManyPeople();