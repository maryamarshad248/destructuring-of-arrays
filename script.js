'use strict';

const Num = [5, 6, 7, 8];
const w = [0];
const x = [1];
const y = [2];
const z = [3];

const [a, b, c, d] = Num;
console.log(a, b, c, d);

const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const starterMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];
const Menu1 = [0];
const Menu2 = [1];
const Menu3 = [2];
const Menu4 = [3];

const [A1, B1, C1, D1] = starterMenu;
console.log(A1, B1, C1, D1);
// the original array will never destroy it will remain as it is:
console.log(starterMenu);

const [first, , second] = restaurant1.starterMenu;
console.log(first, second);

let [primary, secondary] = restaurant1.categories;
console.log(primary, secondary);

// switching variables

//const temp = primary;
//primary = secondary;
//secondary = temp;
//console.log(primary, secondary);

[primary, secondary] = [secondary, primary];
console.log(primary, secondary);

//console.log(restaurant1.order(3, 2));

//receive return value from a function
const [starter, main] = restaurant1.order(3, 2);
console.log(starter, main);

// destructuring of nested arrays

const nested = [7, 8, [6, 10]];
//const [i, , j] = nested;
//console.log(i, j);

//const [i, , [j, k]] = nested;
//console.log(i, j, k);

const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

//default values

//const [p, q, r, s] = [6, 7, 8];
//console.log(p, q, r, s);

//const [p = 1, q = 1, r = 1, s = 1] = [6, 7, 8];
//console.log(p, q, r, s);

const [p = 1, q = 1, r = 1, s = 1] = [6, 7];
console.log(p, q, r, s);
