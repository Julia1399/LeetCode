/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    var objArr = []
    mat.forEach((row,i) => {
        var sum = 0;
    row.forEach(element =>{
        if (element === 1){
            sum++
        }
    })
    objArr[i] = {sum: sum, index: i} 
    });
    objArr.sort((prev, next) => prev.sum - next.sum );
    var answer = []
    for (var i = 0; i<k;i++){
        answer[i] = objArr[i].index
    }
    return answer
};
