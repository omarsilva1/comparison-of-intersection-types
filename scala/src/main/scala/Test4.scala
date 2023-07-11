import scala.util.Random

class RhoTauImpl extends Rho, Tau

@main def runTest4: Unit = {
  // (11)  (σ → τ ) ∩ (σ → ρ) <= σ → (τ ∩ ρ)
  val left_test_11: (Sigma => Tau) & (Sigma => Rho) = {
    case _ : Sigma => new RhoTauImpl {} 
    case _ : Tau => new RhoTauImpl {} 
  }

  val right_test_11: Sigma => (Tau & Rho) = left_test_11

  // (12)  (σ → ρ) ∩ (τ → ρ) <= (σ ∪ τ ) → ρ
  val left_test_12: (Sigma => Rho) & (Tau => Rho) = {
    case _ : Sigma => new Rho {} 
    case _ : Tau => new Rho {} 
  }

  val right_test_12: (Sigma | Tau) => Rho = left_test_12

}
