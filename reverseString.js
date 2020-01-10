var reverseString = function(s) {
    let y = 0;
    for(let i = s.length; i > 0; i--)
    {
        if(y < i){
            [s[y], s[i-1]] = [s[i-1], s[y]];
        }
        y++;
    }
    return s;
};

console.log(reverseString(["H","a","n","n","a","h"]));