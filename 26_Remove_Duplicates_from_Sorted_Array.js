/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (i = 1; i<nums.length;i++){
        if (nums[i] === nums[i-1]){
            arr = nums.splice(i,1);
            i--
        }
    }
};
