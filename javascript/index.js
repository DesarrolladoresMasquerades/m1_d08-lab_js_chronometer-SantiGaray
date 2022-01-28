const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()


}

function printMinutes() {

  const min = chronometer.getMinutes()
  const minString = chronometer.computeTwoDigitNumber(min)
  //  console.log(minString)
  minDecElement.innerText = minString.charAt(0)
  minUniElement.innerText = minString.charAt(1)

}

function printSeconds() { 

  const sec = chronometer.getSeconds()
  const secString = chronometer.computeTwoDigitNumber(sec)
  //  console.log(secString)
  secDecElement.innerText = secString.charAt(0)
  secUniElement.innerText = secString.charAt(1)



}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = document.createElement("li")
  split.innerText = chronometer.split()
  splitsElement.appendChild(split)

}

function clearSplits() {

  //-------- delete old ones ---------

  document.getElementById("splits").remove()

  //---------create new ones

  const newsOl = document.createElement('ol');

  newsOl.id = "splits"

  document.getElementById("splits-container").appendChild(newsOl)
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle("stop")
  btnLeftElement.classList.toggle("start")

  btnRightElement.classList.toggle("split")
  btnRightElement.classList.toggle("reset")
  
  if (btnLeftElement.innerText === "START") {btnLeftElement.innerText = "STOP"}
  else {btnLeftElement.innerText = "START"}

  if (btnRightElement.innerText === "SPLIT") {btnRightElement.innerText = "RESET"}
  else {btnRightElement.innerText = "SPLIT"}

  chronometer.start(printTime)
  
  


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
    if (btnRightElement.innerText === "SPLIT") {
      printSplit()
    } else { 
            chronometer.reset(printTime)
            clearSplits()
    }

});
