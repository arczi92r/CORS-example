console.log("siemanko");

var drawingSurface = document.getElementById("drawingSurface");
var ctxt = drawingSurface.getContext("2d");
// ctxt.beginPath();
// ctxt.moveTo(2, 2);
// ctxt.lineTo(300, 10);
// ctxt.lineTo(400, 350);
// //ctxt.stroke();



// ctxt.beginPath();
// ctxt.arc(100,100,50,0,5 * Math.PI, false);

// ctxt.lineWidth = 10;
// ctxt.strokeStyle = '#0f0';
// ///ctxt.stroke();


// ctxt.beginPath();
// ctxt.arc(450, 100, 95, 1 * Math.PI, 2.5*  Math.PI, false);
// ctxt.lineWidth = 25;
// ctxt.strokeStyle = 'blue';
// //ctxt.stroke();


var c=document.getElementById("drawingSurface");
var ctx=c.getContext("2d");
ctx.beginPath();
 ctxt.moveTo(0, 0);
ctx.quadraticCurveTo(20,100,200,20);

ctx.stroke();
ctx.beginPath();
ctxt.moveTo(0, 0);
ctx.quadraticCurveTo(30,100,200,30);

ctx.stroke();