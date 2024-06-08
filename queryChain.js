const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const queryChain = () => {
  const foodToSearch = "burritos";

  Person.find({ favoriteFoods: foodToSearch })
    .sort('name')
    .limit(2)
    .select('-age')
    .exec((err, data) => {
      if (err) return console.error(err);
      console.log(data);
    });
};

queryChain();