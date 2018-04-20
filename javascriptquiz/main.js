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

console.log (firstName.length == lastName.length);


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
var hour = getHours();
var minutes = getMinutes();

if (hour>= 19  || hour <= 21 && minutes <= 40) { 
    console.log("it's class time"); 
}