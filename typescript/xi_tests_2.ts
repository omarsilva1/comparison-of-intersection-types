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
let left_7: Sigma1 & Tau1 = null
let right_7: Sigma2 & Tau2 = left_7

// (8) σ1 ≤ σ2, τ1 ≤ τ2 ⇒ σ1 ∪ τ1 ≤ σ2 ∪ τ2
let sigma1OrTau1: Sigma1 | Tau1 = null
let sigma2OrTau2: Sigma2 | Tau2 = sigma1OrTau1

// (9) σ ≤ τ, τ ≤ ρ ⇒ σ ≤ ρ
let left_9: Sigma0 = null
let right_9: Sigma2 = left_9

// 9 (fails with any)
// any <= number
let left_9_1: any = null
let right_9_1: number = left_9_1
// string <= any
let left_9_2: string = null
let right_9_2: any = left_9_2
// but string <= number not true
let left_9_3: string = right_9_1


// (14) σ2 ≤ σ1, τ1 ≤ τ2 ⇒ σ1 → τ1 ≤ σ2 → τ2
let left_14: ((a: Sigma2) => Tau1) = null
let right_14: ((a: Sigma1) => Tau2) = left_14