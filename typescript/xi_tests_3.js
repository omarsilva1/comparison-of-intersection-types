// (10) σ & (τ | ρ) ≤ (σ & τ) | (σ & ρ)
function test_10(left) {
    return left;
}
// (11) (σ → τ) & (σ → ρ) ≤ σ → (τ & ρ) (fails)
function test_11(left) {
    return left;
}
// (12) (σ → ρ) & (τ → ρ) ≤ (σ | τ) → ρ
function test_12(left) {
    return left;
}
// (13) unknown ≤ (unknown → unknown) (fails)
function test_13(left) {
    return left;
}
// 13 (works)
function test(params) {
    return 3;
}
test(test);
var x = test;
