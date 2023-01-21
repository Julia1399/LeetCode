/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    arr = nums.sort( (a, b) => a - b );
    for (i = 1; i < arr.length; i++){
        if (arr[i] === arr[i-1]){
            return 1
        }
    }
    return 0
};
