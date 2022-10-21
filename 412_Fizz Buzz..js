/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let str = String(n)
    let newArray = [];
    let array = [...Array(n).keys()].map(x => x+1);
    for (let i = 0; i<=array.length-1; i++){
        if ((Number(array[i]) % 3 === 0) && (Number(array[i]) % 5 === 0)){
            newArray[i] = 'FizzBuzz';
        } else if (Number(array[i]) % 5 === 0){
            newArray[i] = 'Buzz';
        } else if  (Number(array[i]) % 3 === 0){
            newArray[i] = 'Fizz';
        } else {
            newArray[i] = String(i+1);
        }
    }    
    return newArray
};
