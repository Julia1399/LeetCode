/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = 0;
    for (i = 1; i < nums.length+1; i++){
        sum = sum + i - nums[i-1] 
    }
    return sum
};

/* let count = 0
    nums.sort( (a, b) => a - b );
    for (i = 0; i < nums.length; i++){
        if (count !== nums[i]){
            return count
        }
        count++
    }
return nums.length
*/
