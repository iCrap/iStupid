$(document).ready(function(){
  $("#mcbootiebutton").hide();
});

var lets = Math.floor(Math.random() * 13);
var rets = Math.floor(Math.random() * 13)
var multi = lets * rets;
var divis = lets / rets;
var quest = multi;
var bessie = document.getElementById("demo").innerHTML =
 lets + " x " + rets;
var ressie = document.getElementById('bootie').value;
function obesity() {
if (document.getElementById('bootie').value == multi){
alert("Correct");
document.location.reload(true)
//$("#mcbootiebutton").show();
}
else {
alert("Incorrect \nit was " + lets * rets)
document.location.reload(true)
}
function next() {

}
}
