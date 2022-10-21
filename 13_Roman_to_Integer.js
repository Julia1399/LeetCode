/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        I: "1",
        V: "5",
        X: "10",
        L: "50",
        C: "100",
        D: "500",
        M: "1000",
    }
    let inputArray = s.split('')
    let inputInt = []
    let sum = 0
     for (let i = 0; i<=s.length-1; i++) {
         inputInt[i] = parseInt(symbols[inputArray[i]])
    }
    for (let i = 0; i<=inputInt.length-1; i++) {
        
        if (i === inputInt.length-1){
            sum += inputInt[i];
            break
        }
        if (inputInt[i] >= inputInt[i+1]){
            sum += inputInt[i]
            
        } else {
            sum += inputInt[i+1]-inputInt[i]
            i++
        }
    }
   return sum
   
};
