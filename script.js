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
/*
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
*/

/*
// Primitive vs objects

// primitives
var a = 23;
var b = a;
a = 24;
a;
b;

// objects
var obj1 = {
    name: 'john',
    age: 26
};
var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// obj1 and obj2 are pointing to same obj, so obj can be udpated and reflected in obj1 and obj2 right away.

// Functions
var age = 27;
var obj = {
    name: 'jonas',
    city: 'lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

// object change is reflected outside of funtion,
// variable being a primitive does not take change outside of the function.
change(age, obj);

console.log(age);
console.log(obj.city);
*/

// Lecture: passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge (el) {
    return el >= 18;
}

function maxHeartRate (el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeartRate = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(maxHeartRate);







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


// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');

