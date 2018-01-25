var fs = require("fs");
var utilities = require('./utilities');

var iterations = Number(process.argv[2]) || 1;
var _from = Number(process.argv[3]) || 0;
var _to = Number(process.argv[4]) || 1;
var onIteration = 0;

//for file
var userFile = fs.createWriteStream("./files/zadatak6.txt", { flags: 'a' });

//start
console.log("Program started.");

var loopCount = 0;
var intervalFn = setInterval(function () {
    if (onIteration >= iterations) {
        //program end

        userFile.write('*********************************\n');
        userFile.end();

        clearInterval(intervalFn);
        console.log("Program finished.");

        return;
    }
    for (var i = 0; i < 7; i++) {
        loopCount++;
        userFile.write(`Iteracija: ${onIteration} | Broj: ${utilities.getRandomInt(_from, _to)}\n`);
    }
    onIteration++;
}, 1000);