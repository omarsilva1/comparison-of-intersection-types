@main def runTest2: Unit = {
  // (7) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∩ τ1 ≤ σ2 ∩ τ2
  def test_7[Sigma2, Tau2, Sigma1 <: Sigma2, Tau1 <: Tau2](left: Sigma1 & Tau1): Sigma2 & Tau2 = {
    left
  }

  // (8) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∪ τ1 ≤ σ2 ∪ τ2
  def test_8[Sigma2, Tau2, Sigma1 <: Sigma2, Tau1 <: Tau2](left: Sigma1 | Tau1): Sigma2 | Tau2 = {
    left
  }

  // (9) σ ≤ τ, τ ≤ ρ ⇒ σ ≤ ρ
  def test_9[Rho, Tau <: Rho, Sigma <: Tau](left: Sigma): Rho = {
    left
  }

  // (14) σ2 ≤ σ1, τ1 ≤ τ2 ⇒ σ1 → τ1 ≤ σ2 → τ2
  def test_14[Sigma1, Tau2, Sigma2 <: Sigma1, Tau1 <: Tau2](left: Sigma1 => Tau1): Sigma2 => Tau2 = {
    left
  }
}
