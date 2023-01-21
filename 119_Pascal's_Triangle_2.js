/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [1]
    if (rowIndex > 0){
        arr = [[1], [1, 1]]
    } else {
        return arr
    }
    for (i = 1; i < rowIndex; i++){
        let el = [1]
        for (j = 0; j < i; j++){
            el.push(arr[i][j]+arr[i][j+1])
        }
        el.push(1)
    arr.push(el)
    }
    return arr[arr.length-1]
};
