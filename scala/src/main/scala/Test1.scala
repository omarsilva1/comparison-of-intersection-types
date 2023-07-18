@main def runTest1: Unit = {
  // (1) σ ≤ σ ∩ σ
  def test_1[Sigma](left: Sigma): Sigma = {
    left
  }

  // (2) σ ∪ σ ≤ σ
  def test_2[Sigma](left: Sigma | Sigma): Sigma = {
    left
  }

  // (3.1) σ ∩ τ ≤ σ 
  def test_3_1[Sigma, Tau](left: Sigma & Tau): Sigma = {
    left
  }

  // (3.2) σ ∩ τ ≤ τ
  def test_3_2[Sigma, Tau](left: Sigma & Tau): Tau = {
    left
  }

  // (4.1) σ ≤ σ ∪ τ
  def test_4_1[Sigma, Tau](left: Sigma): Sigma | Tau = {
    left
  }

  // (4.2) τ ≤ σ ∪ τ
  def test_4_2[Sigma, Tau](left: Tau): Sigma | Tau = {
    left
  }

  // (5) σ ≤ ω
  def test_5[Sigma](left: Sigma): Any = {
    left
  }

  // (6) σ ≤ σ
  def test_6[Sigma](left: Sigma): Sigma = {
    left
  }
}
