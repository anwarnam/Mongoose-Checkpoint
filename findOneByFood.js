const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const findOneByFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    console.log(person);
  });
};

findOneByFood('Pasta');