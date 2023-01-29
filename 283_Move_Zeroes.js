/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr = [];
    let counter = 0;
    for (i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
            i--
            counter++
        }
        if (counter > nums.length){
            return nums
        }
    }
    return nums
};
