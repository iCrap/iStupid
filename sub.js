
var lets = Math.floor(Math.random() * 51);
var rets = Math.floor(Math.random() * 51);
var sub = lets - rets;
var bessie = document.getElementById("demo").innerHTML =
 lets + " - " + rets;
if (lets - rets < 0) {
  document.location.reload(true);
};
function obesity() {
if (document.getElementById('bootie').value == lets - rets){
alert("Correct");
document.location.reload(true);

}
else {
alert("Incorrect \nit was " + sub)
document.location.reload(true)
}
function next() {

}
}
