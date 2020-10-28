var count = 0;
var task = [10, 25, 50, 100, 500, 1000, 5000, 10000];
var taskIndex = 0;
var gameDone = false;
var messages = ["Good",
 "Better", "Best",
 "👏🏻", "Wow",
 "Master Tapper",
 "King 👑",
 "Diamond 💎 Tapper"
];

var onWin = false;

function clicker() {
 if (!gameDone) {
  count++;
  document.getElementById("count")
   .innerHTML = "Taps Registered: " +
   count;

  if (count === task[taskIndex]) {
   document.getElementById("onWin")
    .innerHTML = messages[taskIndex];

   taskIndex++;
   if (taskIndex != task.length) {
    document.getElementById("task")
     .innerHTML = "Task: Reach " +
     task[taskIndex] + " taps";
   } else {
    document.getElementById("tap")
     .style.display = 'none';
    document.getElementById("onWin")
     .style.fontSize = "30px";
    document.getElementById("onWin")
     .style.fontWeight = "bold";
    gameDone = true;
   }

  }
 }
}

function init() {
 document.getElementById("task")
  .innerHTML = "Task: Reach " + task[
   0] + " taps";

 document.getElementById("count")
  .innerHTML = "Taps Registered: 0";
}

document.addEventListener(
 'DOMContentLoaded', init, false);
