class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(num) {
        let store = {
        0: 0,
        1: 1,
        2: 1, 
        };
        const tribonacci = (n) => {
        if (n <= 1) return n;
        

        if (!store[n]) {
            store[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3); 
        }

        return store[n];
        }
        return tribonacci(num);
}

    

}
