$(document).ready(function(){
  $("#mcbootiebutton").hide();
});

var lets = Math.floor(Math.random() * 51);
var rets = Math.floor(Math.random() * 51);
var multi = lets * rets;
var divis = lets / rets;
var add = lets + rets;
var quest = multi;
var bessie = document.getElementById("demo").innerHTML =
 lets + " + " + rets;
var ressie = document.getElementById('bootie').value;
function obesity() {
if (document.getElementById('bootie').value == lets + rets){
alert("Correct");
document.location.reload(true)
//$("#mcbootiebutton").show();
}
else {
alert("Incorrect \nit was " + add)
document.location.reload(true)
}
function next() {

}
}
