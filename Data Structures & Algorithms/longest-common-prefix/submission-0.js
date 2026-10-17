class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
         if (strs.length === 0) return "";
        let prefixLength = 0;
        let firstElement = strs.shift();

        while (true) {
            if (prefixLength >= firstElement.length ) break;
            const letter = firstElement[prefixLength];
            if (strs.some((str) => str[prefixLength] != letter)) {
            break;
            }

            prefixLength++;
        }
        return firstElement.slice(0, prefixLength);
    }
}
