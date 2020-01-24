/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    for(let i = 0; i < A.length; i++){
        if(A.includes(A[i], i+1)) return A[i];
    }
};

console.log(repeatedNTimes([1,2,3,3]));