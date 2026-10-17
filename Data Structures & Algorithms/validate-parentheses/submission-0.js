class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(input) {
    const arrayVal = input.split("");
    const charlist = [];
    const endList = [];
    const opening = ["(", "{", "["];
    const closure = [")", "}", "]"];

    for (let i = 0; i < arrayVal.length; i++) {
    
    for (let check = 0; check < opening.length; check++) {
    
             if (arrayVal[i] === opening[check]) {
                 charlist.push(arrayVal[i]);
   
             } else if (arrayVal[i] === closure[check]) {
                endList.push(closure[check]);

                 if (charlist[charlist.length - 1] === opening[check]) { 
                     charlist.pop();
                     endList.pop();
                 } 
             }
         }
    }
    if (charlist.length === 0 && arrayVal.length !== 1 && endList.length === 0){
      return true;
    } else {
        return false;
    }
    }
}
