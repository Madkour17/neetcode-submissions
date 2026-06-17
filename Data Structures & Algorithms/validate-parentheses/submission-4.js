class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        let p = 0;
        const openItems = ["[", "{", "("];
        const closingItems = ["]", "}", ")"];

        const mapVals = {
            "]": "[",
            "}": "{",
            ")": "(",
        };

        while (p < s.length) {
            if (openItems.includes(s[p])) {
                arr.push(s[p]);
            } else if (closingItems.includes(s[p]) && arr[arr.length - 1] === mapVals[s[p]]) {
                arr.pop();
            } else {
                return false;
            }

            p++;
        }

        return arr.length === 0;
    }
}
