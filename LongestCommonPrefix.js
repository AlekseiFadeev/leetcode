// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    let equally = false,
        res = '',
        maxStrLength = strs.map(item => item.length).sort();
    
    for(let i = 0; i < maxStrLength[maxStrLength.length-1]; i++)
    {
        let items = strs.map(item => item[i]),
            str = items[0];

        for(let elem in items){
            if(items[elem] == str){
                equally = true;
            }else{
                return res;
            }
        }

        if(res == 'undefined') return "";

        if(equally){
            res += str;
        }
    }

    if(res == 'undefined')
    {
        return "";
    }else{
        return res;
    }
};

console.log(longestCommonPrefix(["aaa","aa","aaa"]));