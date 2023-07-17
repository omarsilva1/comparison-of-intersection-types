class Sigma2 {
    sigma2: string
}
class Tau2 {
    tau2: string
}

class Sigma1 extends Sigma2 {
    sigma1: string
}
class Tau1 extends Tau2 {
    tau1: string
}

class Sigma0 extends Sigma1 {
    sigma0: string
}
// (7) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∩ τ1 ≤ σ2 ∩ τ2
function test_7<Sigma1 extends Sigma2, Tau1 extends Tau2, Sigma2, Tau2>(left: Sigma1 & Tau1): Sigma2 & Tau2 {
    return left;
}

// (8) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∪ τ1 ≤ σ2 ∪ τ2
function test_8<Sigma1 extends Sigma2, Tau1 extends Tau2, Sigma2, Tau2>(left: Sigma1 | Tau1): Sigma2 | Tau2 {
    return left;
}

// (9) σ ≤ τ, τ ≤ ρ ⇒ σ ≤ ρ
function test_9<Sigma extends Tau, Tau extends Rho, Rho>(left: Sigma): Rho {
    return left;
}

// (9) fails with any
// string <= any
function test_9_2(left: string): any {
    return left;
}
// any <= number
function test_9_1(left: any): number {
    return left;
}
// but string <= number not true
function test_9_3(left: string): number {
    return left;
}

// (14) σ2 ≤ σ1, τ1 ≤ τ2 ⇒ σ1 → τ1 ≤ σ2 → τ2
function test_14<Sigma2 extends Sigma1, Sigma1, Tau1 extends Tau2, Tau2>(left: (a: Sigma1) => Tau1): (a: Sigma2) => Tau2 {
    return left;
}
