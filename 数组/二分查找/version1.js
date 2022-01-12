/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] < target) {
            left = middle + 1; // target 在右区间，所以 [middle + 1, right]
        } else if (nums[middle] > target) {
            right = middle - 1; // target 在左区间，所以 [left, middle - 1]
        } else {
            return middle;
        }
    }
    return -1;
};
