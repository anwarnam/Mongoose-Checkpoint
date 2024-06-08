const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const findAndUpdate = (personName) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, updatedPerson) => {
      if (err) return console.error(err);
      console.log(updatedPerson);
    }
  );
};

findAndUpdate('Alice');