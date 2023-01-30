/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var ind = 0;
    var ind1 = 0;
    var arr = [];
    var arr2 = []
    if (nums1.length >= nums2.length){
        while (ind<=nums2.length) {
            ind1 = nums1.indexOf(nums2[ind], 0)
            if (ind1 !== -1){
                arr.push(ind1)
            }
            ind++
            if (ind1>=nums1.length){
                break
            }
        }
        for (i = 0; i < arr.length; i++){
            arr2.push(nums1[arr[i]])
            console.log(i, arr.length-1)
            if (i === arr.length-1){
                break
            }
        }
    } else {
        while (ind<=nums1.length) {
            ind1 = nums2.indexOf(nums1[ind], 0)
            if (ind1 !== -1){
                arr.push(ind1)
            }
            ind++
            console.log(ind1, arr)
            
        }
        for (i = 0; i < arr.length; i++){
            arr2.push(nums2[arr[i]])
            if (i === arr.length-1){
                break
            }
        }
    }
    var set = new Set(arr2)
    return Array.from(set);
};
