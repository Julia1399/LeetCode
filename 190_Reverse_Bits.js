/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let num = n;
    let binary = String(num % 2);
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    const arr = Array(32-binary.length).fill(0);
    newBinary = String(arr.join("")) + String(binary)
    int = newBinary.split("").reverse().join("");
    newInt = parseInt(int, 2);
    return newInt
};
