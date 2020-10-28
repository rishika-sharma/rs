var counter = 10;
var reload =
function reload() {
 window.parent.location = window.parent.location.href;
}

var interval = setInterval(function() {
 counter--;
 console.log(counter);
 if (counter === 0) {
  setTimeout(interval);
  document.getElementById("timer").innerHTML = (
   "<h2>Time out, Your score is: </h2>");
  var buto = document.getElementById("buto")
  buto.disabled = true
  var but = document.createElement("button")
  but.innerHTML = "restart"
  but.onclick = reload

  but.id = "but"
  var re = document.getElementById("re")
  re.appendChild(but)
  return;
 } else {
  document.getElementById('time').innerHTML = (
   counter);
  console.log("Timer --> " + counter);
 }


},
1000);

var x = 0

function plus() {
x += 1
buto.innerHTML = x

}
