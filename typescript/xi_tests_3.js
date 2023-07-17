var Sigma = /** @class */ (function () {
    function Sigma() {
    }
    return Sigma;
}());
var Tau = /** @class */ (function () {
    function Tau() {
    }
    return Tau;
}());
var Rho = /** @class */ (function () {
    function Rho() {
    }
    return Rho;
}());
var left = null;
var right = left;
// 11 (fails)
var left_11 = null;
var right_11 = left_11;
// 12
var left_12 = null;
var right_12 = left_12;
// 13 (fails)
var left_13 = null;
var right_13 = left_13;
// 13 (works)
function test(params) {
    return 3;
}
test(test);
var x = test;
