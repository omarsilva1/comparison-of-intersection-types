@main def runTest3: Unit = {
// (10) σ & (τ | ρ) ≤ (σ & τ) | (σ & ρ)
def test_10[Sigma, Tau, Rho](left: Sigma & (Tau | Rho)): (Sigma & Tau) | (Sigma & Rho) = {
  left
}

// (11) (σ → τ) & (σ → ρ) ≤ σ → (τ & ρ)
def test_11[Sigma, Tau, Rho](left: ((Sigma => Tau) & (Sigma => Rho))): Sigma => (Tau & Rho) = {
 left
}

// (12) (σ → ρ) & (τ → ρ) ≤ (σ | τ) → ρ
def test_12[Sigma, Tau, Rho](left: ((Sigma => Rho) & (Tau => Rho))): (Sigma | Tau) => Rho = {
 left
}

// (13) Any ≤ (Any -> Any) (fails)
def test_13(left: Any): Any => Any = {
 left
}
}
