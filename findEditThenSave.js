const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const findEditThenSave = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);

    person.favoriteFoods.push("hamburger");

    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      console.log(updatedPerson);
    });
  });
};

findEditThenSave('60d5f4f8c6d1b0341c8d3d8a');