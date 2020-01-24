/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let temp = 0;
    for(let i = digits.length-1; i => 0; i--)
    {
        if(digits[i] == 9) temp++;
        else{
            digits[digits.length-1]++;
            break;
        } 
    }
    if(temp > 0){
        digits.splice(digits.length-temp, temp);
        if(digits.length == 0) digits.push(1);
        else digits[digits.length-1]++;
        while(temp > 0){
            digits.push(0);
            temp--;
        }
    }
    return digits;
};

console.log(plusOne([8,9,9,9]));