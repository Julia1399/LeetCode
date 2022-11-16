/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var k = 1;
    if (nums.length === 1){
        return nums[0]
    }
    for (var i = 0; i<nums.length; i++){
        for (var j = i+1; j<nums.length; j++){
            if (nums[i] === nums[j]){
                k++
                if (k>=nums.length/2){
                    return nums[i]
                }
            }
        }
        k=1;
    }
};
