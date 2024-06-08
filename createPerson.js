const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const createAndSavePerson = () => {
  const newPerson = new Person({
    name: "John Doe",
    age: 30,
    favoriteFoods: ["Pizza", "Burger"]
  });

  newPerson.save((err, data) => {
    if (err) return console.error(err);
    console.log(data);
  });
};

createAndSavePerson();