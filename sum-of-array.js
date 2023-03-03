
const array = [2, 4];

// Calculate sum of arr
function sum (arr) {
    
    // Base case
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sum(arr.slice(1));
}

console.log(sum(array));