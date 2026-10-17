class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        let str = String(x);
    let strReverse = str
        .split('')
        .reverse()
        .join('');
  
    return str === strReverse;
    };

}
