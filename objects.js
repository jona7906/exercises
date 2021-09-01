let person1 = {
    firstName: "Peter",
    age: 29,
    student: false
};
console.log(person1);
console.log(person1.lastName);
person1.lastName = "Lind";
console.log(person1.lastName);
console.log(person1);

person1.lastName = undefined;
console.log(person1.lastName);
console.log(person1.middleName);

delete person1.lastName;
console.log(person1);
console.log(person1.lastName);

const person2 = {
    firstName: "Peter",
    age: 29,
    student: false
};

person2.age++;
console.log(person2);

const person3 = {
    firstName: "Jonas",
    age: 28,
    student: true
};

person2.firstName = person3.firstName;
console.log(person2.firstName);