class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const resMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currentItm = nums[i];

            if (resMap.has(currentItm)) {
                resMap.set(currentItm, resMap.get(currentItm) + 1);
            } else {
                resMap.set(currentItm, 1);
            }
        }

        return [...resMap]
            .sort((a, b) => b[1] - a[1])
            .map((x) => x[0])
            .slice(0, k);
    }
}
