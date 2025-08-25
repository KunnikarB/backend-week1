// Declare 3 variables
const firstName = 'Kunnikar'; // string
let favoriteNumber = 9; // number
const likesCoding = true; // boolean

//Add two more variables
const birthYear = 1977; // number
const currentYear = 2025; // number

// Calculate age
const age = currentYear - birthYear;

// Print them to the console
console.log(
  `Hi, my name is ${firstName}, my favorite number is ${favoriteNumber} , and It's ${likesCoding} that I like coding!`
);

// Print another sentence with age
console.log(`I am ${age} years old.`);


/**********************************************************/

// Make an array of 3 foods
const favoriteFoods = ['Peking duck', 'Sushi', 'Pad Thai'];

// Create an object called "student"
const student = {
  name: firstName,
  favoriteNumber: favoriteNumber,
  likesCoding: likesCoding,
  foods: favoriteFoods
};

// Print the whole object
console.log(student);

// Print one of the properties
console.log(`One of my favorite foods is ${student.foods[0]}.`);

