

$(document).keypress(function(e) { 
	var color = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";

$("body").css("background", color)
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


