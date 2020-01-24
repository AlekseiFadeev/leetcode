/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    s = s.split(' ');
    while(s.includes('') && s.length > 1){
        s.splice(s.indexOf(''), 1);
    }
    return s[s.length-1].length;
};

console.log(lengthOfLastWord("b   a    "));