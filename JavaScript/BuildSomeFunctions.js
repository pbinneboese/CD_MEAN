// JavaScript code
function runningLogger() {
  console.log("I am running!");
}
runningLogger();

function multiplyByTen(value) {
  return value*10;
}
multiplyByTen(5);

function stringReturnOne() {
  return "HCString Number One";
}

function stringReturnTwo() {
  return "HC String Number Two";
}

function caller(parm) {
  // console.log(typeof(parm));
  if (typeof(parm) == typeof(caller)) {
    parm();
    // console.log(parm());
  }
}
caller(stringReturnOne);

function myDoubleConsoleLog(parm1, parm2) {
  if ((typeof(parm1) == typeof(myDoubleConsoleLog)) && (typeof(parm2) == typeof(myDoubleConsoleLog))) {
    console.log(parm1(), parm2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(parm) {
  console.log("starting");
  // setTimeout(function(){ alert("Test"); }, 2000);
  setTimeout(function(){ console.log("Waiting"); }, 2000);
  if (typeof(parm) == typeof(caller2)) {
    // setTimeout(function(){ parm(); }, 2000);  // closure function
    parm();
  }
  console.log("ending?");
  return ("interesting");
}

caller2(myDoubleConsoleLog(runningLogger,stringReturnTwo));
