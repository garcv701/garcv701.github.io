// var title = ['<p>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH <span class ="green">EARTH</span> EARTH EARTH EARTH<br>EARTH <span class="green">EARTH EARTH EARTH</span> EARTH EARTH<br>EARTH <span class ="green">EARTH EAR</span>TH EARTH EARTH EARTH<br><span class ="green">EARTH EARTH</span> EARTH EARTH EARTH EARTH<br><span class ="green">EARTH EAR</span>TH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EAR<span class ="green">TH EARTH EARTH<br></span> EARTH EARTH EARTH <span class ="green">EARTH EARTH EARTH<br></span> EARTH EARTH EA<span class ="green">RTH EARTH EARTH</span> EARTH<br>EARTH EARTH <span class ="green">EARTH EARTH EARTH</span> EARTH<br>EARTH EARTH E<span class ="green">ARTH EARTH EARTH EARTH<br></span> EARTH EARTH EAR<span class ="green">TH EARTH EARTH EARTH<br></span> EARTH EARTH EARTH <span class ="green">EARTH EARTH</span> EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br> EARTH EARTH EARTH EARTH EARTH EARTH</p>', '<p>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH <span class ="green">EARTH</span> EARTH EARTH EARTH<br>EARTH <span class="green">EARTH EARTH EARTH</span> EARTH EARTH<br>EARTH <span class ="green">EARTH EAR</span>TH EARTH EARTH EARTH<br><span class ="green">EARTH EARTH</span> EARTH EARTH EARTH EARTH<br><span class ="green">EARTH EAR</span>TH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EAR<span class ="green">TH EARTH EARTH<br></span> EARTH EARTH EARTH <span class ="green">EARTH EARTH EARTH<br></span> EARTH EARTH EA<span class ="green">RTH EARTH EARTH</span> EARTH<br>EARTH EARTH <span class ="green">EARTH EARTH EARTH</span> EARTH<br>EARTH EARTH E<span class ="green">ARTH EARTH EARTH EARTH<br></span> EARTH EARTH EAR<span class ="green">TH EARTH EARTH EARTH<br></span> EARTH EARTH EARTH <span class ="green">EARTH EARTH</span> EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br> EARTH EARTH EARTH EARTH EARTH EARTH</p>'];
// var index = 0;

// function change_title() {
//     var title = [
//         '<p>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH <span class ="green">EARTH</span> EARTH EARTH EARTH<br>EARTH <span class="green">EARTH EARTH EARTH</span> EARTH EARTH<br>EARTH <span class ="green">EARTH EAR</span>TH EARTH EARTH EARTH<br><span class ="green">EARTH EARTH</span> EARTH EARTH EARTH EARTH<br><span class ="green">EARTH EAR</span>TH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EAR<span class ="green">TH EARTH EARTH<br></span> EARTH EARTH EARTH <span class ="green">EARTH EARTH EARTH<br></span> EARTH EARTH EA<span class ="green">RTH EARTH EARTH</span> EARTH<br>EARTH EARTH <span class ="green">EARTH EARTH EARTH</span> EARTH<br>EARTH EARTH E<span class ="green">ARTH EARTH EARTH EARTH<br></span> EARTH EARTH EAR<span class ="green">TH EARTH EARTH EARTH<br></span> EARTH EARTH EARTH <span class ="green">EARTH EARTH</span> EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br> EARTH EARTH EARTH EARTH EARTH EARTH</p>',
//         '<p>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH <span class ="green">EARTH</span> EARTH EARTH EARTH<br>EARTH <span class="green">EARTH EARTH EARTH</span> EARTH EARTH<br>EARTH <span class ="green">EARTH EAR</span>TH EARTH EARTH EARTH<br><span class ="green">EARTH EARTH</span> EARTH EARTH EARTH EARTH<br><span class ="green">EARTH EAR</span>TH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EAR<span class ="green">TH EARTH EARTH<br></span> EARTH EARTH EARTH <span class ="green">EARTH EARTH EARTH<br></span> EARTH EARTH EA<span class ="green">RTH EARTH EARTH</span> EARTH<br>EARTH EARTH <span class ="green">EARTH EARTH EARTH</span> EARTH<br>EARTH EARTH E<span class ="green">ARTH EARTH EARTH EARTH<br></span> EARTH EARTH EAR<span class ="green">TH EARTH EARTH EARTH<br></span> EARTH EARTH EARTH <span class ="green">EARTH EARTH</span> EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br>EARTH EARTH EARTH EARTH EARTH EARTH<br> EARTH EARTH EARTH EARTH EARTH EARTH</p>'
//     ];
//     var index = 0;
//     var x = title[index];
    
//     for (index = 0; index < title.length; index++) {
//     }
  
// };

// function change_left() {
//     $('div').removeClass('slide-right').addClass('slide-left').append('');
// }

// function change_right() {
//     $('div').removeClass('slide-left').addClass('slide-right');
//     change_title();
// }

// function to_left() {
// setInterval(change_left, 5000);
// };

// function to_right() {
//     setInterval(change_right, 10000);
// };

// to_left();
// to_right();


// $(document).ready(function () {
//     setTimeout( function(){
//         $('.slide-right-clone').css('opacity', '1');
//     },1000);
// });

$('.slide-right-clone p')
  .delay(5000)
  .queue(function (next) { 
    $(this).css('opacity', '1'); 
    next(); 
  });

  $('.nepslide-right-clone p')
  .delay(5000)
  .queue(function (next) { 
    $(this).css('opacity', '1'); 
    next(); 
  });

 $('.uranslide-right-clone p')
  .delay(5000)
  .queue(function (next) { 
    $(this).css('opacity', '1'); 
    next(); 
  });

 $('.satslide-right-clone p')
  .delay(5000)
  .queue(function (next) { 
    $(this).css('opacity', '1'); 
    next(); 
  });

  $('.jupslide-right-clone p')
  .delay(5000)
  .queue(function (next) { 
    $(this).css('opacity', '1'); 
    next(); 
  });

    $('.marsslide-right-clone p')
  .delay(5000)
  .queue(function (next) { 
    $(this).css('opacity', '1'); 
    next(); 
  });

     $('.mercslide-right-clone p')
  .delay(5000)
  .queue(function (next) { 
    $(this).css('opacity', '1'); 
    next(); 
  });
   $('.venusslide-right-clone p')
  .delay(5000)
  .queue(function (next) { 
    $(this).css('opacity', '1'); 
    next(); 
  });

