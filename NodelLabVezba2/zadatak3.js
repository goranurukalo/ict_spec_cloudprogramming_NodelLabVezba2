var utilities = require('./utilities');
//
// if user inserts strings - default values will be used
var _from = Number(process.argv[2]) || 0;
var _to = Number(process.argv[3]) || 1;

var times = 7;
for (var i = 0; i < times; i++) {
    console.log(`${utilities.getRandomInt(_from, _to)}`);
}