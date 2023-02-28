// Calculate the value of n to the m power

function exponent(n, m) {

    if (m === 0) {
        return 1;
    } else {
        return n * exponent(n, m - 1);
    }
}

const prod = console.log(exponent(8, 5));