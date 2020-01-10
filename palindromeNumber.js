var isPalindrome = function (x) {
  let res = false;
  if(x < 0) {
    return false;
  }
  let i = x.toString();
  let arr = i.split('');
  for(let i = 0, p = arr.length-1; i < arr.length; i++, p--){
    if(arr[i] == arr[p]){
      res = true;
      if(i >= p){
        break;
      }
    }else{
      return false;
    }
  }
  return res;
};

console.log(isPalindrome(1000021));