const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const findPeopleByName = (personName) => {
  Person.find({ name: personName }, (err, people) => {
    if (err) return console.error(err);
    console.log(people);
  });
};

findPeopleByName('Alice');