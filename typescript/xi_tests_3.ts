class Sigma {
    sigma: string
}
class Tau {
    tau: string
}

class Rho {
    rho: string
}


let left: Sigma & (Tau | Rho) = null
let right: (Sigma & Tau) | (Sigma | Rho) = left

// 11 (fails)
let left_11: ((a: Sigma) => Tau) & ((a: Sigma) => Rho) = null
let right_11: (a: Sigma) => (Tau & Rho)= left_11

// 12
let left_12: ((a: Sigma) => Rho) & ((a: Tau) => Rho) = null
let right_12: (a: Sigma | Tau) => Rho = left_12

// 13 (fails)
let left_13: unknown = null
let right_13: ((a: unknown) => unknown) = left_13

// 13 (works)
function test(params: unknown):
    unknown {
        return 3
    }

test(test)
let x : never = test