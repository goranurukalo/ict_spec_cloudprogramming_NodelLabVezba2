function getCustomDateFormated(date) {
    var day = ('0' + date.getDate()).slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();

    return `${day}.${month}.${year}.`;
}

var AuthorName = "Goran Urukalo";
var timeFormated = getCustomDateFormated(new Date());

console.log("Ime i prezime studenta: " + AuthorName);
console.log("Trenutan datum: " + timeFormated);