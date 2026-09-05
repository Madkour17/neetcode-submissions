class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Your code goes here
        nums.sort((a, b) => a - b);

        let p2, p3;

        const arr = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) {
                break;
            }

            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let p3 = nums.length - 1;
            let p2 = i + 1;

            while (p3 > p2) {
                const currentSum = nums[i] + nums[p2] + nums[p3];
                if (currentSum === 0) {
                    arr.push([nums[i], nums[p2], nums[p3]]);

                    while (p3 > p2 && nums[p2] === nums[p2 + 1]) {
                        p2++;
                    }

                    while (p3 > p2 && nums[p3] === nums[p3 - 1]) {
                        p3--;
                    }
                    p2++;
                    p3--;
                } else if (currentSum > 0) {
                    p3--;
                } else {
                    p2++;
                }
            }
        }

        return arr;
    }
}
