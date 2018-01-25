var utilities = require('./utilities');

var iterations = Number(process.argv[2]) || 1;
var _from = Number(process.argv[3]) || 0;
var _to = Number(process.argv[4]) || 1;
var onIteration = 0;

//start
console.log("Program started.");

var loopCount = 0;
var intervalFn = setInterval(function () {
    if (onIteration >= iterations) {
        //program end
        clearInterval(intervalFn);
        console.log("Program finished.");
        return;
    }
    for (var i = 0; i < 7; i++) {
        loopCount++;
        console.log(`Iteracija: ${onIteration} | Broj: ${utilities.getRandomInt(_from, _to)}`);
    }
    onIteration++;
}, 1000);