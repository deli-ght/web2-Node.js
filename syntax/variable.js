var a = 1;
console.log(a); // a=1
var a = 2;
console.log(a); // a=2

var name = 'k8805';
var letter = 'Lorem ipsum dolor '+name+'\n\nsit amet, consectetur adipisicing elit, '+name+'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+name+'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '+name+'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '+name+'officia deserunt mollit anim id est laborum.';

console.log(letter);

var letter2 = `Lorem ipsum dolor ${name} sit amet, consectetur adipisicing elit, ${name} sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ${name} voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ${name} officia deserunt mollit anim id est laborum.`;

console.log(letter2);
