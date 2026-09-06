class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let p1 = 0;
        let p2 = numbers.length - 1;

        for (let i = 0; i < numbers.length; i++) {
            const currentSum = numbers[p1] + numbers[p2];
            if (currentSum === target) {
                return [p1+1, p2+1];
            } else if (currentSum > target) {
                p2--;
            } else {
                p1++;
            }
        }

        // for (let i = 0; i < numbers.length; i++) {
        //     const diff = target - number[i];

        //     if (arrMap.get(Number(diff))) {
        //         return [, i + 1];
        //     } else {
        //         arrMap.set(number[i], diff);
        //     }
        // }

        return [];
    }
}
