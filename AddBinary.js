/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const result = BigInt('0b'+a) + BigInt('0b'+b);
    return result.toString(2);
};

console.log(addBinary('1010','1011'));