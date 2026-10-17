class Solution {
    /**
     * @param {number} num
     * @return {string}
     */
    intToRoman(num) {
        const translateDict = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
        };
        let value = [];
        for ( let val in translateDict ) {
            if (num >= translateDict[val]){
            let newNum = num % translateDict[val];
            let iterator = Math.floor(num / translateDict[val]);
            for (let i = 1; i <= iterator; i++){
                value.push(val);
            };
            num = newNum;
        };
        
        
        };
        return value.join(''); 
    }
}
