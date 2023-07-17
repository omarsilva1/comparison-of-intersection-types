// (10) σ & (τ | ρ) ≤ (σ & τ) | (σ & ρ)
function test_10<Sigma, Tau, Rho>(left: Sigma & (Tau | Rho)): (Sigma & Tau) | (Sigma & Rho) {
    return left;
}

// (11) (σ → τ) & (σ → ρ) ≤ σ → (τ & ρ) (fails)
function test_11<Sigma, Tau, Rho>(left: ((a: Sigma) => Tau) & ((a: Sigma) => Rho)): (a: Sigma) => (Tau & Rho) {
    return left;
}

// (12) (σ → ρ) & (τ → ρ) ≤ (σ | τ) → ρ
function test_12<Sigma, Tau, Rho>(left: ((a: Sigma) => Rho) & ((a: Tau) => Rho)): (a: Sigma | Tau) => Rho {
    return left;
}

// (13) unknown ≤ (unknown → unknown) (fails)
function test_13(left: unknown): (a: unknown) => unknown {
    return left;
}

// 13 (works)
function test(params: unknown): unknown {
    return 3
}

test(test)
let x : never = test