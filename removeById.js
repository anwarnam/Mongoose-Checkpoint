const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const removeById = (personId) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return console.error(err);
    console.log(removedPerson);
  });
};

removeById('60d5f4f8c6d1b0341c8d3d8a');