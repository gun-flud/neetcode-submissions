class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
    //nums // int array
    //ans // int array that equals 2nums.length
    const ans = [...nums];
    ans.push(...nums); 
    return ans;

    }
}
