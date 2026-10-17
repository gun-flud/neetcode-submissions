class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
         if (m === 1 || n === 1) return 1;
        const table = Array.from({ length: m }, () => Array(n).fill(1));
        let j = 1;

        for(let i = 1; j < m; i++) {
            table[j][i] = table[j-1][i] + table[j][i-1];

            if (i === n - 1) {
                i = 0;
                j += 1;
            }
        }
        return table[m-1][n-1];
    }
}
