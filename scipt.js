var w=400,h=200

svg=d3.select("#chart")
.append("svg")
.attr("width",w)
.attr("height",h);

var id = setInterval(logo, 100);

function logo() {
while(w < 500){
var logo=svg
.append("circle")
.attr("width", w)
.attr("height", h)
.attr("cx",cirX)
.attr("cy",cirY)
.attr("r",cirR)
.attr("opacity", circOpacity)
.attr("fill","#dddddd");

w+=100;}
}