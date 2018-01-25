var Pravougaonik = function (_a, _b) {
    var a = _a;
    var b = _b;

    _povrsina = function () {
        return a * b;
    };

    _obim = function () {
        return 2 * (a + b);
    };

    return {
        Povrsina: _povrsina,
        Obim: _obim,
    }
}

module.exports = Pravougaonik;