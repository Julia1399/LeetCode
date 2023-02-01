/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var arr = Array.from(new Set(nums))
    arr.sort((a,b) => b-a)
    if (arr.length > 2){
        return arr[2]
    } else {
        return arr[0]
    }
};
