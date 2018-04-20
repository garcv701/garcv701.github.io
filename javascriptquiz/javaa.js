alert('hello');
console.log('hello world');

var today = Date();

console.log('Today is', today);
console.log('Today is');
console.log(today);

if (1<2){
	console.log();
}

if (1<2){
	console.log('it is true');
}



var date = new Date;
var hour = date.getHours();

if ( hour == 0 ) {
  console.log("woah, it's midnight");
} else if ( hour > 0 && hour < 9 ) {
  console.log("it's too early, go back to bed");
} else {
  console.log("carpe diem");
}

date.getSeconds();
date.getMinutes();
date.getHours();

for ( var i = 0; i < 10; i++ ) {
  console.log('The index is', i);
}