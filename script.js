var w=500,h=1000, circOpacity=.6, triOpacity=.2, triY=65, triX=10, cirY=35, cirX=35, cirR=30

window.onload=function()  //executes when the page finishes loading
{
	setTimeout(display, 0);  //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.
	
};
function display()
{
	document.getElementById("header").className="show";
};


var svg=d3.select("#logo")
.append("svg")
.attr("width",w)
.attr("height",h)
.attr("id", "svgBox");


w=200, h=200


// S Code
var logo=svg
.append("circle")
.attr("id", "sCircle")
.attr("cx", "85")
.attr("cy", "300");

var animate = logo.append("animate")
.attr("attributeType", "CSS")
.attr("attributeName", "cy")
.attr("from", "50")
.attr("to", "300")
.attr("dur", "2s")
.attr("begin", "click")
.attr("repeatCount", "0")
.attr("calcMode", "spline")
.attr("values", "250; 300; 260; 300; 280; 300; 295; 300")
.attr("keyTimes", "0; 0.25; 0.4; 0.55; 0.7; 0.85; 0.95; 1")
.attr("keySplines", "0.42 0 1 1; 0 0 0.59 1;  0.42 0 1 1; 0 0 0.59 1; 0.42 0 1 1; 0 0 0.59 1;  0.42 0 1 1")
.attr("fill", "freeze")
.attr("id", "circ-anim");


var animate = logo.append("animate")
.attr("attributeType", "CSS")
.attr("attributeName", "cy")
.attr("from", "50")
.attr("to", "300")
.attr("dur", "2s")
.attr("repeatCount", "0")
.attr("calcMode", "spline")
.attr("values", "50; 380; 200; 332; 250; 300; 295; 300")
.attr("keyTimes", "0; 0.25; 0.4; 0.55; 0.7; 0.85; 0.95; 1")
.attr("keySplines", "0.42 0 1 1; 0 0 0.59 1;  0.42 0 1 1; 0 0 0.59 1; 0.42 0 1 1; 0 0 0.59 1;  0.42 0 1 1")
.attr("fill", "freeze")
.attr("id", "circ-anim");


var animate = logo.append("animate")
.attr("attributeType", "CSS")
.attr("attributeName", "r")
.attr("from", "0")
.attr("to", "80")
.attr("dur", "2s")
.attr("repeatCount", "0");

var tri1 = svg.append("path") 
.attr("id", "sTri")
.attr("d", "M75 265 L150 225 L150 305 Z");

/*
var animateTri4 = tri1.append("animate")
.attr("attributeName", "d")
.attr("dur", "1s")
.attr("begin", "click")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M75 265 L75 265 L75 265 Z;M75 265 L150 225 L150 305 Z;")
*/
var tri2 = svg.append("path") 
.attr("id", "sTri")
.attr("d", "M95 335 L20 295 L20 375 Z");

var animateTri = tri2.append("animate")
.attr("attributeName", "d")
.attr("dur", ".5s")
.attr("begin", "click")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M95 335 L20 295 L10 325 Z;M95 335 L20 295 L20 375 Z;");


var animateTri = tri2.append("animate")
.attr("attributeName", "d")
.attr("dur", "2s")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M20 295 L20 295 L20 295 Z;M95 335 L20 295 L20 375 Z;");

var animateTri2 = tri1.append("animate")
.attr("attributeName", "d")
.attr("dur", ".5s")
.attr("begin", "click")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M 75,265 C 125,265 125,265 175,265 175,315 175,315 175,365 125,365 125,365 75,365 75,315 75,315 75,265 Z; M 75,265 C 112.5,245 112.5,245 150,225 150,250 150,250 150,265 150,285 150,285 150,305 112.5,285 112.5,285 75,265 Z;")

.attr("fill", "freeze");

var animateTri2 = tri1.append("animate")
.attr("attributeName", "d")
.attr("dur", "2s")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M 75,265 C 125,265 125,265 175,265 175,315 175,315 175,365 125,365 125,365 75,365 75,315 75,315 75,265 Z; M 75,265 C 112.5,245 112.5,245 150,225 150,250 150,250 150,265 150,285 150,285 150,305 112.5,285 112.5,285 75,265 Z;")

.attr("fill", "freeze");
/*
M 75,265 C 87.5,240 87.5,240 100,215 125,265 125,265 150,315 100,315 100,315 50,315 62.5,290 62.5,290 75,265 Z;
M 25,50 C 37.5,25 37.5,25 50,0 75,50 75,50 100,100 50,100 50,100 0,100 12.5,75 12.5,75 25,50 Z;

 M 75,265 C 112.5,245 112.5,245 150,225 150,250 150,250 150,265 150,285 150,285 150,305 112.5,285 112.5,285 75,265 Z;
                     C 112.5,245 112.5,245 150,225 
                     150,250 150,250 150,265
                     150,285 150,285 150,305
                     112.5,285 112.5,285 75,265
                     Z;"/>

*/
//C Code

var logo2=svg
.append("circle")
.attr("id", "sCircle")
.attr("cx", "255")
.attr("cy", "300");

var animate = logo2.append("animate")
.attr("attributeType", "CSS")
.attr("attributeName", "cy")
.attr("from", "50")
.attr("to", "300")
.attr("dur", "2s")
.attr("begin", "click")
.attr("repeatCount", "0")
.attr("calcMode", "spline")
.attr("values", "200; 300; 210; 300; 260; 300; 295; 300")
.attr("keyTimes", "0; 0.20; 0.35; 0.5; 0.65; 0.8; 0.95; 1")
.attr("keySplines", "0.42 0 1 1; 0 0 0.59 1;  0.42 0 1 1; 0 0 0.59 1; 0.42 0 1 1; 0 0 0.59 1;  0.42 0 1 1")
.attr("fill", "freeze")
.attr("id", "bounce");

var animate = logo2.append("animate")
.attr("attributeType", "CSS")
.attr("attributeName", "cy")
.attr("from", "50")
.attr("to", "300")
.attr("dur", "2s")
.attr("repeatCount", "0")
.attr("calcMode", "spline")
.attr("values", "50; 300; 210; 300; 260; 300; 295; 300")
.attr("keyTimes", "0; 0.20; 0.35; 0.5; 0.65; 0.8; 0.95; 1")
.attr("keySplines", "0.42 0 1 1; 0 0 0.59 1;  0.42 0 1 1; 0 0 0.59 1; 0.42 0 1 1; 0 0 0.59 1;  0.42 0 1 1")
.attr("fill", "freeze")
.attr("id", "bounce");




var tri2=svg.append("path")
.attr("id", "sTri")
.attr("d","M345 340 L345 260, 255 300");

var animateTri2 = tri2.append("animate")
.attr("attributeName", "d")
.attr("dur", ".5s")
.attr("begin", "click")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M335 338 L365 267, 255 300, 255 300; M345 340 L345 260, 255 300, 255 300")
.attr("fill", "freeze");

var animateTri2 = tri2.append("animate")
.attr("attributeName", "d")
.attr("dur", "2s")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "m335 355 L335 255, 270 205, 210 310; M345 340 L345 260, 255 300, 255 300")
.attr("fill", "freeze");



//R Code

var tryTri = svg.append("path")
.attr("id", "sCircle")
.attr("d", "M360 220 C 485 210, 485 370, 360 360");


var animateTri = tryTri.append("animate")
.attr("attributeName", "d")
.attr("dur", ".5s")
.attr("begin", "click")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M360 220 C 455 200, 485 320, 360 340;M360 220 C 485 210, 485 370, 360 360;");


var animateTri = tryTri.append("animate")
.attr("attributeName", "d")
.attr("dur", "2s")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M360 220 C 350 140, 510 140, 360 220;M360 220 C 485 210, 485 370, 360 360;");



var tri3=svg.append("path")
.attr("id", "sTri")
.attr("d","m360 280 L360 380, 460 380");

var animateTri2 = tri3.append("animate")
.attr("attributeName", "d")
.attr("dur", ".5s")
.attr("begin", "click")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "m360 260 L360 380, 420 380; m360 280 L360 380, 460 380")
.attr("fill", "freeze");

var animateTri2 = tri3.append("animate")
.attr("attributeName", "d")
.attr("dur", "2s")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "m360 200 L360 380, 360 380; m360 280 L360 380, 460 380")
.attr("fill", "freeze");


//Header

var header=d3.select("#logo")
.append("h2")
.attr("class","hide")
.attr("id", "header")
.text("STEPHANIE CATHERINE RITCHIE");

//About 

var svg=d3.select("#about")
.append("svg")
.attr("width","100%")
.attr("height","700px")
.attr("id", "svgBox");

/*
var square=svg.append("path")
.attr("id", "sTri")
.attr("d","M10 10 L10 650, 700 300")
.attr("width", "5px")
.attr("fill", "none");

var animateSquare = square.append("animate")
.attr("attributeName", "d")
.attr("dur", ".5s")
.attr("begin", "click")
.attr("repeatCount", "0")//M360 220 C 350 140, 510 140, 500 220
.attr("values", "M335 338 L365 267, 255 300, 255 300; M345 340 L345 260, 255 300, 255 300")
.attr("fill", "freeze");
*/