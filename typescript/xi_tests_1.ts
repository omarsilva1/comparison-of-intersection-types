type Sigma = { sigma: string };
type Tau = { tau: string };


// (1) σ ≤ σ ∩ σ
let left_1: Sigma = null;
let right_1: Sigma & Sigma = left_1;

// (2) σ ∪ σ ≤ σ
let left_2: Sigma | Sigma = null;
let right_2: Sigma = left_2;

// (3) σ ∩ τ ≤ σ, σ ∩ τ ≤ τ
let left_3: Sigma & Tau = null;
let right_3_1: Sigma = left_3;
let right_3_2: Tau = left_3;


// (4) σ ≤ σ ∪ τ, τ ≤ σ ∪ τ
let left_4_1: Sigma = null
let left_4_2: Tau = null
let right_4_1: Sigma | Tau = left_4_1;
let right_4_2: Sigma | Tau = left_4_2;

// (5) σ ≤ ω
let left_5: Sigma = null
let omegaFromSigma: unknown = left_5;

// (6) σ ≤ σ
let left_6: Sigma = null
let right_6: Sigma = left_6


type Entity = {id: number}
type Person = Entity & {name: string}

class Entity2 {
    id: number
}

