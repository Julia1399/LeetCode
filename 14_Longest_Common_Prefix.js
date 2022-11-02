/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort( (a, b) => a.length - b.length )
    var arr = []
    var out = ''
    var k = 1;
    for (var i=0; i<strs.length; i++ ){
        arr[i] = strs[i].split('')
    }
    for (var j = 0; j<arr[0].length; j++){
        for (var i = 0; i<strs.length; i++){
            if (arr[i][j] !== arr[0][j]){
                k = 0;
            }
        }
        if (k !== 0){
            out += arr[0][j]
        }
    }
    return out
};
