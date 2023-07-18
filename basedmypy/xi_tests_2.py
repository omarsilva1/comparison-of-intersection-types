from basedtyping import Intersection
from __future__ import annotations
from typing import Any, Callable, TypeVar

class Sigma2: pass
class Sigma1(Sigma2): pass
class Sigma0(Sigma1): pass
class Tau2: pass
class Tau1(Tau2): pass
class Rho: pass

# (7) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∩ τ1 ≤ σ2 ∩ τ2
def test_7(left: Sigma1 & Tau1) -> Sigma2 & Tau2:
    return left

# (8) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∪ τ1 ≤ σ2 ∪ τ2
def test_8(left: Sigma1 | Tau1) -> Sigma2 | Tau2:
    return left

# (9) σ ≤ τ, τ ≤ ρ ⇒ σ ≤ ρ
def test_9(left: Sigma0) -> Sigma2:
    return left

# (14) σ2 ≤ σ1, τ1 ≤ τ2 ⇒ σ1 → τ1 ≤ σ2 → τ2
def test_14(left: Callable[[Sigma2], Tau1]) -> Callable[[Sigma1], Tau2]:
    return left
