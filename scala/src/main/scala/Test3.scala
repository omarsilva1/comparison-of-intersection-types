import scala.util.Random

trait Sigma3
trait Tau3
trait Rho3

@main def runTest3: Unit = {

  def right_10(x: (Sigma3 & Tau3) | (Sigma3 & Rho3)): String = "It works!"

  def left_10(x: Sigma3): Sigma3 & (Tau3 | Rho3) = {
    if (Random.nextBoolean()) new Sigma3 with Tau3 {} 
    else new Sigma3 with Rho3 {} 
  }

  val sigma = new Sigma3 {}
  right_10(left_10(sigma))
    
  // (13) ω ≤ ω → ω (fails)
  val left_13: Any = ()
  val right_13: Any => Any = left_13
}
