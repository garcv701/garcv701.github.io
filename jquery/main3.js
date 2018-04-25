var div = ["1", "2", "3", "4", "5"];


$(document).on("click", "#toggle" ,function() {
	var randomDiv = div[Math.floor(Math.random() * div.length)]
    $("#" + randomDiv).css("background-color", "red");
});


// var elements = $(".box");
// var randomelement = elements[Math.floor(Math.random() * elements.length)];
// var randomid = $(elements[randomelement].attr("id"));
// console.log(randomid);

// $(function() {
//   $('#toggle').click(function() {
//     $('#1', '#2', '#3', '#4', '#5',).toggle();
//   });


// });


