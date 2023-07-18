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
