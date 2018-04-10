$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  $("#calcBtn").click(function(){
    var age = $("#age").val();
    var tall = $("#tall").val();
    var weight = $("#weight").val();
    var gender = $("input[name=gender]:checked").val();
    var BMI;
    BMI = weight/(tall/100)/(tall/100);
    var BMR;
    if (gender=="男") {
      BMR = (13.7*weight)+(5.0*tall)-(6.8*age)+66;
    }else{
      BMR = (9.6*weight)+(1.8*tall)-(4.7*age)+655;
    }
    var c = Shape.Circle(200,200,80);
    c.fillColor = 'pink';
    var a = Shape.Circle(285,100,55);
    a.fillColor = 'orange';
    var b = Shape.Circle(115,100,55);
    b.fillColor = 'orange';
    var text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'BMR'+BMR.toFixed(1)+'\nBMI'+BMI.toFixed(1);


  });



var tool = new Tool();



tool.onMouseDown = function(event) {
  var c =Shape.Circle(event.point.x, event.point.y, 20);
  var a =Shape.Circle(event.point.x-45, event.point.y, 20);
  var b =Shape.Circle(event.point.x+45, event.point.y, 20);
  var d =Shape.Circle(event.point.x-22.5, event.point.y+22.5, 20);
  var e =Shape.Circle(event.point.x+22.5, event.point.y+22.5, 20);
  c.strokeColor='black';
  a.strokeColor='blue';
  b.strokeColor='red';
  d.strokeColor='yellow';
  e.strokeColor='green';

};
/*
var tool= new Tool()

tool.onMouseDown =function(event){
  var BMI = Shape.Circle(event.point,20);
  c .fillColor='pink';
}
*/

    paper.view.draw();
  //console.log(shape) ;
});
