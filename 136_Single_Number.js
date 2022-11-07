/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var a = 0;
    for (var i = 0; i<nums.length; i++){
        a = 0
        for (var j = 0; j<nums.length; j++){
            if ((nums[i] === nums[j]) & i!==j){
                a = 1;
                break
            }
        }
        if (a === 0){
            return nums[i]
        }
    }
};
