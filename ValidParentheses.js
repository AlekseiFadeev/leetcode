/**
 * @param {string} s
 * @return {boolean}
 */

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//   Open brackets must be closed by the same type of brackets.
//   Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.


var isValid = function (s) {
    if (s.length <= 1) {
        if(s.length == 0) return true;
        return false;
    }
        

    let matchingOpeningBracket, ch;
    let stack = [];

    let openingBrackets = ['[', '{', '('];
    let closingBrackets = [']', '}', ')'];

    for (let i = 0; i < s.length; i++) {
        ch = s[i];

        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
            if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                return false
            }
        } else {
            stack.push(ch)
        }
    }

    return (stack.length == 0);
};

console.log(isValid(""));


// var isValid = function(s) {   
//     const stack = [];
    
//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }
    
//     return stack.length === 0;
// };