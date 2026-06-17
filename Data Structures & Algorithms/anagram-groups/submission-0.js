class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const itemsMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const currItm = strs[i];

            const currItmSorted = [...currItm].sort().join("");

            if (itemsMap.has(currItmSorted)) {
                itemsMap.set(currItmSorted, [...itemsMap.get(currItmSorted), currItm]);
            } else {
                itemsMap.set(currItmSorted, [currItm]);
            }
        }
        return [...itemsMap.values()];
    }
}
