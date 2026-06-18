class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let p = 0;
        let j = p + 1;

        let best = 0;

        while (j < prices.length) {
            if (prices[j] > prices[p]) {
                best = Math.max(prices[j] - prices[p], best);
            } else {
                p = j;
            }
            j++;
        }

        return best;
    }
}
