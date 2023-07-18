from basedtyping import Intersection
from __future__ import annotations
from typing import Any, Callable, TypeVar, Union

Sigma = TypeVar('Sigma')
Tau = TypeVar('Tau')
Rho = TypeVar('Rho')

# (10) σ & (τ | ρ) ≤ (σ & τ) | (σ & ρ)
def test_10(left: Sigma & (Tau | Rho)) -> (Sigma & Tau) | (Sigma & Rho):
    return left

# (11) (σ → τ) & (σ → ρ) ≤ σ → (τ & ρ) (fails)
def test_11(left: Callable[[Sigma], Tau] & Callable[[Sigma], Rho]) -> Callable[[Sigma], Tau & Rho]:
    return left

# (12) (σ → ρ) & (τ → ρ) ≤ (σ | τ) → ρ
def test_12(left: (Callable[[Sigma], Rho] & Callable[[Tau], Rho])) -> Callable[[Sigma | Tau], Rho]:
    return left

# (13) unknown ≤ (unknown → unknown) (fails)
def test_13(left: Any) -> Callable[[Any], Any]:
    return left
