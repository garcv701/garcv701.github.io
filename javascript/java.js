
var myWeekend= "Over the weekend I threw up on the floor of a fancy restaurant.";

console.log(myWeekend);

console.log(65+1,3*22,132/2,33*2,33+33,22+44);

var studentGroupOne = ['Emile', 'Kristen', 'Emily', 'Evelin', 'Prithi', 'Esra'];

console.log(studentGroupOne)

var studentGroupTwo = ['Shuting']

console.log(studentGroupTwo)

var studentGroupThree = ['Vinny']

console.log(studentGroupThree)

var studentGroupFour = ['Khe']

console.log(studentGroupFour)

var studentGroupFive = ['Vincent']

console.log(studentGroupFive)

var studentGroupSix = ['Soyeon','Seowon','Jahyun']

console.log(studentGroupSix)

var studentGroupSeven = ['Yaren', 'Yangchen'] 

console.log(studentGroupSeven)

var allStudentsHere = 15;

console.log('All students here', '=', allStudentsHere)

console.log('All students here?', Boolean (allStudentsHere == studentGroupOne.length + studentGroupTwo.length + 
	studentGroupThree.length + studentGroupFour.length + studentGroupFive.length + studentGroupSix.length + 
	studentGroupSeven.length));

var bonusStudents = ['studentGroupOne', 'studentGroupTwo', 'studentGroupThree', 'studentGroupFour', 'studentGroupFive', 'studentGroupSix', 'studentGroupSeven'];

for ( var i = 0; i < bonusStudents.length; i++ ) {
  console.log( bonusStudents[i] + ' is in index ' + i );
}