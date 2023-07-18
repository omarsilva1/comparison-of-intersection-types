from basedtyping import Intersection
from __future__ import annotations
from typing import Any, TypeVar

Sigma = TypeVar('Sigma')
Tau = TypeVar('Tau')

# (1) σ ≤ σ ∩ σ
def test_1(left: Sigma) -> Sigma & Sigma:
    return left

# (2) σ ∪ σ ≤ σ
def test_2(left: Sigma) -> Sigma:
    return left

# (3.1) σ ∩ τ ≤ σ 
def test_3_1(left: Sigma & Tau) -> Sigma:
    return left

# (3.2) σ ∩ τ ≤ τ
def test_3_2(left: Sigma & Tau) -> Tau:
    return left

# (4.1) σ ≤ σ ∪ τ
def test_4_1(left: Sigma) -> Sigma | Tau:
    return left

# (4.2) τ ≤ σ ∪ τ
def test_4_2(left: Tau) -> Sigma | Tau:
    return left

# (5) σ ≤ ω
def test_5(left: Sigma) -> Any:
    return left

# (6) σ ≤ σ
def test_6(left: Sigma) -> Sigma:
    return left
