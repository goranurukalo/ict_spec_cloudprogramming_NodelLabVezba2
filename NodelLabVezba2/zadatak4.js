var Pravougaonik = require('./pravougaonik');

var p1 = new Pravougaonik(1, 2);

console.log(`p1 - povrsina: ${p1.Povrsina()}`);
console.log(`p1 - obim: ${p1.Obim()}`);

//var p2 = new Pravougaonik(4, 5);
//p2.a = 5; //can't change p1 properties [private]

//console.log(`p2 - povrsina: ${p2.Povrsina()}`);
//console.log(`p2 - obim: ${p2.Obim()}`);