var vincent = "vincent";
console.log(vincent);

var favNumber = 9;

console.log (9);
console.log ('9');

console.log (Boolean(9==9));

var nameLetters = ['v','i','n','c','e','n','t'];
console.log (nameLetters);

var dataTypes = ['v', 1, Boolean(1<2)];
console.log (dataTypes);

var firstName = 'vincent';
var lastName = 'garcia';
console.log (firstName + ' ' + lastName);

console.log (nameLetters[0]);
console.log (nameLetters[nameLetters.length-1]);

var superr = 'supercalifragilisticexpialidocious';
console.log (superr.length);

console.log ("# of letters in first name = last name?", firstName.length == lastName.length);


var allStudents = 15;

if (allStudents=15) {
	console.log ('everyone is here');
}

else {
	console.log ('everyone is not here');

}


for ( var i = 0; i < nameLetters.length; i++ ) {
  console.log( nameLetters[i] + ' is in index ' + i );
}


var now = new Date();
var hour = now.getHours();
var minutes = now.getMinutes();

if (hour>= 19 && hour <= 21 && minutes <= 40) { 
    console.log("it's class time"); 
}

else {
	console.log("it's not class time");
}


var month = now.getMonth();
var year = now.getFullYear();
var date = now.getDate();
console.log(month, "/", date, "/", year)


// var day = now.getDay();
// if (day )

var day = new Array(7);
day[0] =  "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var n = day[now.getDay()];
console.log(n);

var food = ["chilaquiles", "longsilog", "banana pancakes"];
var animals = ["turtle", "sloth", "bear"];
var places = ["san francisco", "kawaii", "osaka"];
var pokemon = ["mudkip", "snorlax", "mew"];

var arrayArray = [food, animals, places, pokemon];

console.log(arrayArray);

for ( var i = 0; i < arrayArray.length; i++ ) {
  console.log( arrayArray[i] + ' is in index ' + i );
}

for ( var i = 0; i < arrayArray.length; i++ ) {
  for ( var i = 0; i < food.length; i++ ) {
  console.log( food[i] + ' is in index ' + i );}
  for ( var i = 0; i < animals.length; i++ ) {
  console.log( animals[i] + ' is in index ' + i );}
  for ( var i = 0; i < places.length; i++ ) {
  console.log( places[i] + ' is in index ' + i );}
  for ( var i = 0; i < pokemon.length; i++ ) {
  console.log( pokemon[i] + ' is in index ' + i );}
}
