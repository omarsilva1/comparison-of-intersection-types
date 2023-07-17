// (1) σ ≤ σ ∩ σ
function test_1<Sigma>(left: Sigma): Sigma & Sigma {
    return left;
}

// (2) σ ∪ σ ≤ σ
function test_2<Sigma>(left: Sigma | Sigma): Sigma {
    return left;
}

// (3.1) σ ∩ τ ≤ σ 
function test_3_1<Sigma, Tau>(left: Sigma & Tau): Sigma {
    return left;
}

// (3.2) σ ∩ τ ≤ τ
function test_3_2<Sigma, Tau>(left: Sigma & Tau): Tau {
    return left;
}

// (4.1) σ ≤ σ ∪ τ
function test_4_1<Sigma, Tau>(left: Sigma): Sigma | Tau {
    return left;
}

// (4.2) τ ≤ σ ∪ τ
function test_4_2<Sigma, Tau>(left: Tau): Sigma | Tau {
    return left;
}

// (5) σ ≤ ω
function test_5<Sigma>(left: Sigma): unknown {
    return left;
}

// (6) σ ≤ σ
function test_6<Sigma>(left: Sigma): Sigma {
    return left;
}

type Entity = {id: number}
type Person = Entity & {name: string}

class Entity2 {
    id: number
}

