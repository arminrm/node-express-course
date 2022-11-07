//Common JS, every file is module
//Modules - encapsulated code

const names = require('./4-names');
const sayHi = require('./5-utils');
const gen = require('./6-alternativeflav');
require('./7-mindgrenade');

console.log(gen);
sayHi(names.john);
sayHi(names.peter);