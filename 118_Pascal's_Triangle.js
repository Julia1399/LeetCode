/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [];
    for (let k = 0; k < numRows; k++) {
        arr.push(k)
    }
    let newArr = arr.map((item, i) => []);
    console.log(newArr)
    newArr[0][0] = 1;
    for (i = 1; i<numRows; i++){
        newArr[i][0] = 1;
        newArr[i][i] = 1;
        for (j = 1; j<i; j++){
         newArr[i][j] = newArr[i-1][j-1]+newArr[i-1][j] 
        }
    }
    return newArr
};
