
// Recursion solution
function fibonacci (num) {

    if (num === 0) {
        return 0;
    }

    if (num === 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(100));

// Iterative solution
function fib (num) {
    
    let fib_zero = 0;
    let fib_one = 1;

    if(num === 0) {
        return fib_zero;
    }

    if (num === 1) {
        return fib_one;
    }

    let fib;
    for (let i = 2; i <= num; i++) {
        fib = fib_zero + fib_one;

        fib_zero = fib_one;
        fib_one = fib;
    }
    return fib;
}

console.log(fib(100));