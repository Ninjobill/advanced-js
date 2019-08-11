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
/*
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
*/

// functions returning functions
/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

function howDeep(abyss) {
    console.log(abyss + ', one level deep');
    return function level1(level1) {
        console.log(level1 + ', two levels deep');
        return function level2(level2) {
            console.log(level2 + ', three levels deep');
            return function level3(level3) {
                console.log (level3 + ', four levels deep');
                return function bottom(bottom) {
                    console.log('you made it to the ' + bottom);
                }
            }
        }
    }
}

howDeep('wide open')('diving')('diving deeper')('deeper')('bottom');
*/

// IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5 );
}

game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5 );
})();
*/

// **********************
// Closures
// ***********************

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

/*
function interviewQuestion(job) { 
    return function(name) {
        console.log(name + ', hows your ' + job + ' job going?');
    }
    
}

var jane = interviewQuestion('Designer');
var jim = interviewQuestion('Sales');


jane('jane');
jim('jim');
*/

/*
function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if(job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/

///////////////////////////
// lecture : bine, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if ( style === 'formal' ) {
            console.log('Good ' + timeOfDay + ', Ladies and gentleman! Im ' + this.name + ', im a ' + this.job + ' and im ' + this.age + ' years old.');
        } else if ( style === 'friendly' ) {
            console.log('Hey! whats up? Im ' + this.name + ', im a ' + this.job + ' and im ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        } 
    }
};
var emily = {
    name: 'emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// call method helps borrow, first element is the this element.
john.presentation.call(emily, 'friendly', 'afternoon');

// saves a preset for a function
var johnFriendly = john.presentation.bind(john, 'friendly', 'morning');
// johnFriendly('night');
johnFriendly();






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

