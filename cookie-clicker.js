var cookies = 0;
var grannies = 0;
var bakers = 0;
var n = 0;
var m = 0;
var f = 0;
var staff = 0;
var factory = 0;
var total = cookies + grannies +
bakers + staff + factory;

function cookieClick(number) {
cookies = cookies + number;
document.getElementById("cookies")
  .innerHTML = cookies;
document.getElementById(
   "cookiesper").innerHTML =
  grannies + bakers + staff +
  factory;
document.title = cookies +
  " Cookies";
};

function buyGranny() {
var grannyCost = Math.floor(10 *
  Math.pow(1.1, grannies));
if (cookies >= grannyCost) {
  grannies = grannies +
   1;
  cookies = cookies - grannyCost;
  document.getElementById("grannies")
   .innerHTML = grannies;
  document.getElementById("cookies")
   .innerHTML = cookies;
};
var nextCost = Math.floor(10 * Math
  .pow(1.1, grannies));
document.getElementById(
  "grannyCost").innerHTML = nextCost;
};

function buyBaker() {
var bakerCost = Math.floor(100 *
  Math.pow(1.03, bakers));

if (cookies >= bakerCost) {
  bakers = bakers + 10;
  cookies = cookies - bakerCost;
  document.getElementById("bakers")
   .innerHTML = n += 1;
  document.getElementById("cookies")
   .innerHTML = cookies;
};
var nextCost = Math.floor(100 * Math
  .pow(1.03, bakers));
document.getElementById(
  "bakerCost").innerHTML = nextCost;
};

function buyStaff() {
var staffCost = Math.floor(1000 *
  Math.pow(1.007, staff));

if (cookies >= staffCost) {
  staff = staff + 100;
  cookies = cookies - staffCost;
  document.getElementById("staff")
   .innerHTML = m += 1;
  document.getElementById("cookies")
   .innerHTML = cookies;
};
var nextCost = Math.floor(1000 *
  Math
  .pow(1.007, staff));
document.getElementById(
  "staffCost").innerHTML = nextCost;
};

function buyFactory() {
var factoryCost = Math.floor(25000 *
  Math.pow(1.0007, factory));

if (cookies >= factoryCost) {
  factory = factory + 1000;
  cookies = cookies - factoryCost;
  document.getElementById(
    "factories")
   .innerHTML = f += 1;
  document.getElementById("cookies")
   .innerHTML = cookies;
};
var nextCost = Math.floor(25000 *
  Math
  .pow(1.0007, factory));
document.getElementById(
   "factoryCost").innerHTML =
  nextCost;
};

function save() {
localStorage.setItem("cookiecount",
  cookies);
localStorage.setItem("granniecount",
  grannies);
localStorage.setItem("bakercount",
  bakers);
localStorage.setItem("staffcount",
  staff);
}

function load() {
cookies = localStorage.getItem(
  "cookiecount");
cookies = parseInt(cookies);
grannies = localStorage.getItem(
  "granniecount");
grannies = parseInt(grannies);
document.getElementById("cookies")
  .value = cookies;
document.getElementById("grannies")
  .value = grannies;

}


window.setInterval(function() {
cookieClick(grannies);
cookieClick(bakers);
cookieClick(staff);
cookieClick(factory);
}, 1000, );
