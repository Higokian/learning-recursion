
function sum(num) {

    // Base case
    if (num === 0) {
        return 0;
    } 

    return num + sum(num -1);
}

console.log(sum(100));