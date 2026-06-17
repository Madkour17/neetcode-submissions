class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (let i = 0; i < strs.length; i++) {
            res += String(strs[i].length) + ";" + strs[i];
        }

        console.log({ res });

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const arr = [];

        while (i < str.length) {
            let j = i;

            while (str[j] !== ";") {
                j++;
            }

            const currItmLength = Number(str.slice(i, j));
            arr.push(str.slice(j + 1, j + currItmLength + 1));

            i = j + currItmLength + 1;
        }

        return arr;
    }
}
