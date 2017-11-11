$(document).ready(function(){
  $("#mcbootiebutton").hide();
});

var lets = Math.floor(Math.random() * 145);
var rets = Math.floor(Math.random() * 13);

var multi = lets * rets;
var divis = lets / rets;
var quest = multi;
var failmount = 0;
while (rets > lets) {
  rets--;
};
while (lets / rets % 1 != 0 ) {
rets--;
};
while (rets == -1){
fixrets();
};
function fixrets() {
    for (i = 0; i < Math.floor(Math.random() * 13);j++) {
        rets++;
    };
};
if (rets == 0) {
    rets = lets;
    lets = 0;
}else {
    failmount++;
    console.log("fail amount has been increased")
};
var bessie = document.getElementById("demo").innerHTML =
 lets + " ÷ " + rets;
var ressie = document.getElementById('bootie').value;
function obesity() {
if (document.getElementById('bootie').value == lets / rets){
alert("Correct");
document.location.reload(true)
//$("#mcbootiebutton").show();
}
else {
alert("Incorrect \nit was " + lets / rets)
document.location.reload(true)
}
function next() {

}
}
