class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsObj = {};

        for (let i = 0; i < nums.length; i++) {
            // const currentItem = nums[i];

            numsObj[nums[i]] = (numsObj[nums[i]] || 0) + 1;

            if (numsObj[nums[i]] > 1) {
                return true;
            }
        }

        return false;
    }
}
