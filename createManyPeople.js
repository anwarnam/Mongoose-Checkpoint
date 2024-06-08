const mongoose = require('mongoose');
const Person = require('./models/person');
require('./database');

const createManyPeople = (arrayOfPeople) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    console.log(people);
  });
};

const arrayOfPeople = [
  { name: 'Alice', age: 25, favoriteFoods: ['Pasta', 'Salad'] },
  { name: 'Bob', age: 30, favoriteFoods: ['Steak', 'Fries'] },
  { name: 'Charlie', age: 35, favoriteFoods: ['Sushi', 'Ramen'] }
];

createManyPeople(arrayOfPeople);