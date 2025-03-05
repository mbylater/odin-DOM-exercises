// Object = a collection of related properties and/or methods
// Can represent real world objects (people, products, places)
// object = {key:value,
//          function() }



const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmploeyed: true,
    sayHello: function(){console.log("Hi, I am Spongebob!")}
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmploeyed: false,
    sayHello: function(){console.log("Hi, I am Patrick...")}
}

person1.sayHello();
person2.sayHello();

// String pimitive
const message = "This is my first message!";

// String object
const another = new String("Hi")

let hour = 6;

if (hour >= 6 && hour < 12) 
    console.log(`Good morning!`)
else if (hour >= 12 && hour < 18)
    console.log(`Good afternoon!`)
else 
    console.log(`Good evening!`)

function add7 (number) {
    
}

// New exercise. Write a function called add7 that takes one number and returns that number + 7.

function sum7(number) {
    return number + 7;
}

console.log(sum7(4));

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 7));
console.log(multiply(3, 4));
console.log(multiply(16, 6));


// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. 
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(str) {
    if (!str) return ``; // Handle empty or null strings
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello"));     
console.log(capitalize("WORLD"));     
console.log(capitalize("jAvAsCrIpT")); 
console.log(capitalize(""));  

// Write a function called lastLetter that takes a string and returns the very last letter of that string

function lastLetter(str) {
    if (!str) return ``;
    let n = str.length;
    return str[n-1];
}

console.log(lastLetter(`betbethbgrsgre`))
console.log(lastLetter(`abcd`))
console.log(lastLetter(`3240tgj4230`))