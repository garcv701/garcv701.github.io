
var person = prompt("Get something off your chest:");


(function makeDiv(){
    var divsize = ((Math.random()*100) + 50).toFixed().toString(16);
    var color = '#'+ Math.round(0xffffff * Math.random());
    $newdiv = $('.drop').css({
        'width':divsize+'px',
        'height':divsize+'px',
        // 'background-color': color
    });

    
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'

    }).appendTo( 'body' ).fadeIn(500).delay(300).fadeOut(200, function(){
       $(this).remove();
       makeDiv(); 
    }); 
})();



