/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let counter = nums[0];
    let arr = [];
    for (i = 0; i < nums.length; i++){
        if (nums[i+1]-nums[i] !== 1){
            if (nums[i] === counter){
                elem = `${counter}`
            } else{
                elem = `${counter}->${nums[i]}`
            }
            arr.push(`${elem}`)
            counter = nums[i+1]
        }
    }
    return arr
};
