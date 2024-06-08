const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const findPersonById = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    console.log(person);
  });
};

findPersonById('60d5f4f8c6d1b0341c8d3d8a');