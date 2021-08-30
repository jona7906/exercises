

const man_name = "Peter";
const cat_name = "Mandu";

console.log(`My name is ${man_name}. \nI have a cat called ${cat_name}`);

const len = man_name.length

console.log(`${man_name} is ${len} characters long`);

const letter = man_name[0];
console.log(`the first letter of ${man_name} is ${letter}`);

const name = "Albus Percival Wulfric Brian Dumbledore";
console.log(`Number of characters in name: ${name.length}`);
console.log(`character at index 2: ${name[2]}`);
console.log(`character at index 6: ${name[6]}`);
console.log(`character at index 2: ${name[2]}`);


console.log(`Index at character D in dumbledore: ${name.indexOf('D')}`);

console.log(`Well the index of the last "e"\nwould be the amount of characters \nin the name so e is index = ${name.length}`);


const str1 = " There       is         space her \n   ";
const str2 = str1.trim();

console.log(`str1 = ${str1}\nstr2 = ${str2}`);


console.log(`Firstname: ${name.substring(0, 5)}`);
console.log(`Lastname: ${name.substring(name.indexOf('D'))}`);
console.log(`Middlest: _${name.substring(name.indexOf('W'), name.indexOf('B')-1)}_`);
console.log(`Middlest with spaces: _${name.substring(name.indexOf('W')-1, name.indexOf('B'))}_`);
console.log(`some of brian: _${name.substring(name.indexOf('B')+2, name.indexOf('n')+1)}_`);
console.log(`some of first name: _${name.substring(name.indexOf('b'), name.indexOf('s')+1)}_`);
 
