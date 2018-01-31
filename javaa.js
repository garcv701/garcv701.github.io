var text = 'Making the Web a Better Place Making the Web';
    var canvas = document.createElement("canvas");
    var fontSize = 24;
    canvas.setAttribute('height', fontSize);
    var context = canvas.getContext('2d');
    context.fillStyle    = 'rgba(0,0,0,0.1)';
    context.font         = fontSize + 'px sans-serif';
    context.fillText(text, 0, fontSize);

    $('#elementId').css({'background-image':"url(" + canvas.toDataURL("image/png")+ ")" });
