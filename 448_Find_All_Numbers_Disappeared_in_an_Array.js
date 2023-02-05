/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var set = new Set(nums);
    var ex = [];
    var newArr = Array.from({length: nums.length}, (_, i) => i + 1)
    for (i = 0; i < newArr.length; i++){
        if (!set.has(newArr[i])){
            ex.push(newArr[i])
        }
    }
    return ex
};
