trait Sigma2
trait Tau2

trait Sigma1 extends Sigma2
trait Tau1 extends Tau2

class Sigma0 extends Sigma1

@main def runTest2: Unit = {
  // (7) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∩ τ1 ≤ σ2 ∩ τ2
  class Sigma1Tau1 extends Sigma1 with Tau1
  val left_7: Sigma1 & Tau1 = new Sigma1Tau1
  val right_7: Sigma2 & Tau2 = left_7

  // (8) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∪ τ1 ≤ σ2 ∪ τ2
  val sigma1OrTau1: Sigma1 | Tau1 = new Sigma1Tau1
  val sigma2OrTau2: Sigma2 | Tau2 = sigma1OrTau1

  // (9) σ ≤ τ, τ ≤ ρ ⇒ σ ≤ ρ
  val left_9: Sigma0 = new Sigma0
  val right_9: Sigma2 = left_9

  // (14) σ2 ≤ σ1, τ1 ≤ τ2 ⇒ σ1 → τ1 ≤ σ2 → τ2
  val left_14: Sigma2 => Tau1 = _ => new Tau1 {}
  val right_14: Sigma1 => Tau2 = left_14
}
