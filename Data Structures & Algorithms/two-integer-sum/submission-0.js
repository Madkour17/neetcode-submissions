class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let ans = [];

        const obj = {};

        for (let i = 0; i < nums.length; i++) {
            const currentItm = nums[i];

            if (Number.isFinite(obj[target - currentItm])) {
                ans = [obj[target - currentItm], i];
                return ans;
            } else {
                obj[currentItm] = i;
            }
        }

        return ans;
    }
}
