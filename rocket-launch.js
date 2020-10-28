//VAR DECLARATION


//BASIC VARS

var basicIncome = 1;

var workMultiplier = 1;

var userMoney = 0;

//WORKER VARS

var numWorker = 0;

var workerIncome = 10;

var workerCost = 100;

//FACTORY VARS

var numFactory = 0;

var factoryIncome = 100;

var factoryCost = 1000;

//KILOFACTORY VARS

var numKilofactory = 0;

var kilofactoryIncome = 1000;

var kilofactoryCost = 10000;

//MEGAFACTORY VARS

var numMegafactory = 0;

var megafactoryIncome = 10000;

var megafactoryCost = 100000;

//ROCKETCONSTRUCTION VARS

var nosecone = false;

var cockpit = false;

var fuel = false;

var frame = false;

var oxidizer = false;

var pumps = false;

var nozzle = false;

var fins = false;

var readyToLaunch = false;

//WORK

function work() {

 userMoney = userMoney + basicIncome * workMultiplier;

 document.getElementById("userMoney").innerHTML = userMoney;

 if (userMoney == 5) {

  document.getElementById("instructions").innerHTML = "";

 }

}

//WORKER AND FACTORIES

//WORKER

function worker() {

 userMoney = userMoney + workerIncome * numWorker;

 document.getElementById("userMoney").innerHTML = userMoney;

}

function buyWorker() {

 if (userMoney < workerCost) {

  alert("You dont have enough for a worker You have $" +
   userMoney + " you need $" + workerCost + ".");

  return;

 }

 numWorker = numWorker + 1;

 userMoney = userMoney - workerCost;

 workerCost = Math.round((workerCost * 1.25));

 document.getElementById("workerCost").innerHTML = workerCost;

 document.getElementById("userMoney").innerHTML = userMoney;

 document.getElementById("workerProduction").innerHTML =
  numWorker * workerIncome;

 document.getElementById("numWorker").innerHTML = numWorker;

 totalProduction();

}

//FACTORY

function factory() {

 userMoney = userMoney + factoryIncome * numFactory;

 document.getElementById("userMoney").innerHTML = userMoney;

}

function buyFactory() {

 if (userMoney < factoryCost) {

  alert("You dont have enough for a factory. You have $" +
   userMoney + " you need $" + factoryCost + ".");

  return;

 }

 numFactory = numFactory + 1;

 userMoney = userMoney - factoryCost;

 factoryCost = Math.round((factoryCost * 1.25));

 document.getElementById("factoryCost").innerHTML = factoryCost;

 document.getElementById("userMoney").innerHTML = userMoney;

 document.getElementById("factoryProduction").innerHTML =
  numFactory * factoryIncome;

 document.getElementById("numFactory").innerHTML = numFactory;

 totalProduction();

}

//KILOFACTORY

function kilofactory() {

 userMoney = userMoney + kilofactoryIncome * numKilofactory;

 document.getElementById("userMoney").innerHTML = userMoney;

}

function buyKilofactory() {

 if (userMoney < kilofactoryCost) {

  alert("You dont have enough for a kilofactory. You have $" +
   userMoney + " you need $" + kilofactoryCost + ".");

  return;

 }

 numKilofactory = numKilofactory + 1;

 userMoney = userMoney - kilofactoryCost;

 kilofactoryCost = Math.round((kilofactoryCost * 1.25));

 document.getElementById("kilofactoryCost").innerHTML =
  kilofactoryCost;

 document.getElementById("userMoney").innerHTML = userMoney;

 document.getElementById("kilofactoryProduction").innerHTML =
  numKilofactory * kilofactoryIncome;

 document.getElementById("numKilofactory").innerHTML =
  numKilofactory;

 totalProduction();

}

//MEGAFACTORY

function megafactory() {

 userMoney = userMoney + megafactoryIncome * numMegafactory;

 document.getElementById("userMoney").innerHTML = userMoney;

}

function buyMegafactory() {

 if (userMoney < megafactoryCost) {

  alert("You dont have enough for a megafactory. You have $" +
   userMoney + " you need $" + megafactoryCost + ".");

  return;

 }

 numMegafactory = numMegafactory + 1;

 userMoney = userMoney - megafactoryCost;

 megafactoryCost = Math.round((megafactoryCost * 1.25));

 document.getElementById("megafactoryCost").innerHTML =
  megafactoryCost;

 document.getElementById("userMoney").innerHTML = userMoney;

 document.getElementById("megafactoryProduction").innerHTML =
  numMegafactory * megafactoryIncome;

 document.getElementById("numMegafactory").innerHTML =
  numMegafactory;

 totalProduction();

}

//ROCKET CONSTRUCTION

//NOSECONE

function buyNosecone() {

 if (userMoney < 1000000) {

  alert("You dont have enough for a Nose Cone. You have " +
   userMoney + " you need 1000000.");

  return;

 }

 if (nosecone) {

  alert("You already have a Nose Cone.");

  return;

 }

 nosecone = true;

 userMoney = userMoney - 1000000;

 document.getElementById("nosecone").innerHTML = "";

 document.getElementById("noseconePrice").innerHTML =
  "PURCHASED";

 checkLaunchStatus();

}

//COCKPIT

function buyCockpit() {

 if (userMoney < 1500000) {

  alert("You dont have enough for a Cockpit. You have " +
   userMoney + " you need 1500000.");

  return;

 }

 if (cockpit) {

  alert("You already have a Cockpit.");

  return;

 }

 cockpit = true;

 userMoney = userMoney - 1500000;

 document.getElementById("cockpit").innerHTML = "";

 document.getElementById("cockpitPrice").innerHTML =
  "PURCHASED";

 checkLaunchStatus();

}

//FUEL

function buyFuel() {

 if (userMoney < 2000000) {

  alert("You dont have enough for Fuel. You have " + userMoney +
   " you need 2000000.");

  return;

 }

 if (fuel) {

  alert("You already have Fuel.");

  return;

 }

 fuel = true;

 userMoney = userMoney - 2000000;

 document.getElementById("fuel").innerHTML = "";

 document.getElementById("fuelPrice").innerHTML = "PURCHASED";

 checkLaunchStatus();

}

//FRAME

function buyFrame() {

 if (userMoney < 2500000) {

  alert("You dont have enough for a Frame. You have " +
   userMoney + " you need 2500000.");

  return;

 }

 if (frame) {

  alert("You already have a Frame.");

  return;

 }

 frame = true;

 userMoney = userMoney - 2500000;

 document.getElementById("frame").innerHTML = "";

 document.getElementById("framePrice").innerHTML = "PURCHASED";

 checkLaunchStatus();

}

//OXIDIZER

function buyOxidizer() {

 if (userMoney < 3000000) {

  alert("You dont have enough for an Oxidizer. You have " +
   userMoney + " you need 3000000.");

  return;

 }

 if (oxidizer) {

  alert("You already have an Oxidizer.");

  return;

 }

 oxidizer = true;

 userMoney = userMoney - 3500000;

 document.getElementById("oxidizer").innerHTML = "";

 document.getElementById("oxidizerPrice").innerHTML =
  "PURCHASED";

 checkLaunchStatus();

}

//PUMPS

function buyPumps() {

 if (userMoney < 3500000) {

  alert("You dont have enough for Pumps. You have " +
   userMoney + " you need 3500000.");

  return;

 }

 if (pumps) {

  alert("You already have Pumps.");

  return;

 }

 pumps = true;

 userMoney = userMoney - 3500000;

 document.getElementById("pumps").innerHTML = "";

 document.getElementById("pumpsPrice").innerHTML = "PURCHASED";

 checkLaunchStatus();

}

//NOZZLE

function buyNozzle() {

 if (userMoney < 4000000) {

  alert("You dont have enough for a Nozzle. You have " +
   userMoney + " you need 4000000.");

  return;

 }

 if (nozzle) {

  alert("You already have a Nozzle.");

  return;

 }

 nozzle = true;

 userMoney = userMoney - 4000000;

 document.getElementById("nozzle").innerHTML = "";

 document.getElementById("nozzlePrice").innerHTML = "PURCHASED";

 checkLaunchStatus();

}

//FINS

function buyFins() {

 if (userMoney < 4500000) {

  alert("You dont have enough for Fins. You have " + userMoney +
   " you need 4500000.");

  return;

 }

 if (fins) {

  alert("You already have Fins.");

  return;

 }

 fins = true;

 userMoney = userMoney - 4500000;

 document.getElementById("fins").innerHTML = "";

 document.getElementById("finsPrice").innerHTML = "PURCHASED";

 checkLaunchStatus();

}

//LAUNCH STATUS

function checkLaunchStatus() {

 if (nosecone && cockpit) {

  if (fuel && frame) {

   if (oxidizer && pumps) {

    if (nozzle && fins) {

     readyToLaunch = true;

    }

   }

  }

 }

 if (readyToLaunch) {

  document.getElementById("rocketStatus").innerHTML = "READY!";

 }

}

//LAUNCH ROCKET

function launchRocket() {

 if (!readyToLaunch) {

  alert("ROCKET NOT READY!");

  return;

 }

 if (userMoney < 10000000) {

  alert("You dont have enough money to launch the rocket!");

  return;

 }

 document.getElementById("rocketStatus").innerHTML =
  "LAUNCHED!!!";

 document.getElementById("header").innerHTML =
  "ROCKET LAUNCHED GAME WON!!!";

 document.body.style.backgroundColor = "red";

 alert(
  "Congrats. YOU HAVE WON THE GAME. Feel free to mess around on this page or click the link at the bottom to go back to the homepage."
 );



}

//CALCULATE TOTAL PRODUCTION

function totalProduction() {

 var workerProduction = parseInt(document.getElementById(
  "workerProduction").innerHTML);

 var factoryProduction = parseInt(document.getElementById(
  "factoryProduction").innerHTML);

 var kilofactoryProduction = parseInt(document.getElementById(
  "kilofactoryProduction").innerHTML);

 var megafactoryProduction = parseInt(document.getElementById(
  "megafactoryProduction").innerHTML);

 document.getElementById("totalProduction").innerHTML =
  workerProduction + factoryProduction + kilofactoryProduction +
  megafactoryProduction;



}

//INTERVAL FUNCTIONS

window.setInterval(function() {

 worker();

 factory();

 kilofactory();

 megafactory();

}, 1000);
