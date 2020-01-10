// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

var reverse = function(x) {
    let lessThenZero = false;
    if(x < 0){
        lessThenZero = true;
    }
    let i = x.toString();
    let arr = i.split('');
    let y = 0;
    x = '';
    if(lessThenZero){
        arr.shift();
    }
    for(let i = arr.length; i > 0; i--)
    {
        if(y < i){
            [arr[y], arr[i-1]] = [arr[i-1], arr[y]];
        }
        y++;
    }
    for(let i = 0; i < arr.length; ++i)
    {
        if(arr[0] == '0'){
            arr.splice(0, 1);
        }else{
            break;
        }
        i = 0;
    }
    if(lessThenZero){
        arr.unshift('-');
    }
    for(let i = 0; i < arr.length; i++){
        x += arr[i];
    }
    if(x >= (2 ** 31 - 1) || x <= ((-2) ** 31)){
        x = 0;
    }
    return x;
};

console.log(reverse(901000));