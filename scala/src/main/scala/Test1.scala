trait Sigma
trait Tau
trait Rho

class SigmaImpl extends Sigma
class TauImpl extends Tau
class RhoImpl extends Rho

@main def runTest1: Unit = {
  // (1) σ ≤ σ ∩ σ
  val left_1: Sigma = new SigmaImpl
  val right_1: Sigma & Sigma = left_1

  // (2) σ ∪ σ ≤ σ
  val left_2: Sigma | Sigma = new SigmaImpl
  val right_2: Sigma = left_2

  // (3) σ ∩ τ ≤ σ, σ ∩ τ ≤ τ
  class SigmaTauImpl extends Sigma with Tau
  val example_with_intersection: Sigma & Tau = new SigmaTauImpl
  val example_with_union: Sigma | Tau = new SigmaImpl
  // val right_3_1: Sigma = left_3
  // val right_3_2: Tau = left_3
  
  // (4) σ ≤ σ ∪ τ, τ ≤ σ ∪ τ
  val left_4_1: Sigma = new SigmaImpl
  val left_4_2: Tau = new TauImpl
  val right_4_1: Sigma | Tau = left_4_1
  val right_4_2: Sigma | Tau = left_4_2

  // (5) σ ≤ ω
  val left_5: Sigma = new SigmaImpl
  val omegaFromSigma: Any = left_5

  // (6) σ ≤ σ
  val left_6: Sigma = new SigmaImpl
  val right_6: Sigma = left_6
}
