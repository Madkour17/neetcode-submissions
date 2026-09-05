class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let p1 = 0;
        let p2 = heights.length - 1;

        let maxArea = 0;

        while (p1 < p2) {
            const currentArea = (p2 - p1) * Math.min(heights[p1], heights[p2]);

            if (currentArea > maxArea) {
                maxArea = currentArea;
            } else if (heights[p2] > heights[p1]) {
                p1++;
            } else {
                p2--;
            }
        }

        return maxArea;
    }
}
