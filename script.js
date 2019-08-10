// Function constructor
/*
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

const Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
    }
}

var john = new Person('john', 1990, 'teacher');

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';


console.log(john);

var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});

console.log(john);











// console.log(1 + 2 + "3");

// var foo = 10 + '20';

// console.log(foo);

// function add(a, b) {
//   var d = function(b) {
//       return a + b;
//   };
//   if(typeof b == 'undefined') {
//     return d;
//   } else {
//       return d(b);
//   }
// }

// console.log(add(2, 5)); // 7
// console.log(add(2)(5)); // 7

// console.log("i'm a lasagna hog".split('').reverse().join(''));


// var foo = {n:1};
// var bar = foo;
// foo.x = foo = {n:2};

// console.log(foo.x);

// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');

