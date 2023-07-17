var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sigma2 = /** @class */ (function () {
    function Sigma2() {
    }
    return Sigma2;
}());
var Tau2 = /** @class */ (function () {
    function Tau2() {
    }
    return Tau2;
}());
var Sigma1 = /** @class */ (function (_super) {
    __extends(Sigma1, _super);
    function Sigma1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sigma1;
}(Sigma2));
var Tau1 = /** @class */ (function (_super) {
    __extends(Tau1, _super);
    function Tau1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tau1;
}(Tau2));
var Sigma0 = /** @class */ (function (_super) {
    __extends(Sigma0, _super);
    function Sigma0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sigma0;
}(Sigma1));
// (7) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∩ τ1 ≤ σ2 ∩ τ2
function test_7(left) {
    return left;
}
// (8) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∪ τ1 ≤ σ2 ∪ τ2
function test_8(left) {
    return left;
}
// (9) σ ≤ τ, τ ≤ ρ ⇒ σ ≤ ρ
function test_9(left) {
    return left;
}
// (9) fails with any
// string <= any
function test_9_2(left) {
    return left;
}
// any <= number
function test_9_1(left) {
    return left;
}
// but string <= number not true
function test_9_3(left) {
    return left;
}
// (14) σ2 ≤ σ1, τ1 ≤ τ2 ⇒ σ1 → τ1 ≤ σ2 → τ2
function test_14(left) {
    return left;
}
