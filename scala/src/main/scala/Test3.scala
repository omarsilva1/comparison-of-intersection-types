import scala.util.Random

trait Sigma3
trait Tau3
trait Rho3

@main def runTest3: Unit = {

  def right_10(x: (Sigma3 & Tau3) | (Sigma3 & Rho3)): String = "It works!"

  def left_10(x: Sigma3): Sigma3 & (Tau3 | Rho3) = {
    if (Random.nextBoolean()) new Sigma3 with Tau3 {} // 50% of the time return Sigma3 with Tau3
    else new Sigma3 with Rho3 {} // 50% of the time return Sigma3 with Rho3
  }

  val sigma = new Sigma3 {}
  right_10(left_10(sigma))
    
  // For the function types, Scala doesn't support intersection of function types. So we can't implement case 11, case 12 and case 13.
  
  // (13) ω ≤ ω → ω (fails)
  // val left_13: Any = ()
  // val right_13: Any => Any = left_13
}