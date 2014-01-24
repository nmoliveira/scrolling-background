var animateBg = function (canvas, ctx, img) {
    // properties
    var y = 0;
    var speed = 2;
    var ch = canvas.height;
    var cw = canvas.width;

    // our loop
    setInterval(function () {
        // draw botom part
        ctx.drawImage(img, 0, 0, cw, ch, 0, y, cw, ch);

        // draw remaining part
        ctx.drawImage(img, 0, ch-y, cw, ch, 0, 0, cw, ch);

        // increment y or reset y if reached the bottom
        y = y < ch ? y + speed : 0;


    }, 1000/30);
}

var start = function (canvas, ctx) {
    // load image 
    var img = new Image();
    img.onload = function () {
        // start animation
        animateBg(canvas,ctx, img);
    };
    img.src = 'lib/img/starBackground.png';          
}

window.onload = function () {
    // get canvas
    var canvas = document.getElementById('canvas');
    // get context
    var ctx = canvas.getContext && canvas.getContext('2d');
    if(!ctx) { 
        alert("Your browser is not supported!"); 
    } else {
        // start
        start(canvas, ctx);    
    }    
}