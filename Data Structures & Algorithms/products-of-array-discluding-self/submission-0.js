class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = new Array(nums.length).fill(1);

        for (let p = 1; p < nums.length; p++) {
            arr[p] = arr[p - 1] * nums[p - 1];
        }

        let post = 1;

        for (let j = nums.length - 1; j >= 0; j--) {
            arr[j] *= post;
            post *= nums[j];
        }

        return arr;
    }
}
