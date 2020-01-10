var romanToInt = function (s) {
  let arr = s.split(''),
    res = 0;
  let val = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]){
      case 'I':
        if(arr[i + 1] == 'V'){
          res = +res + 4;
          i++;
        } else if(arr[i + 1] == 'X'){
          res = +res + 9;
          i++;
        } else {
            res = +res + val[arr[i]];
        }
        break;
      case 'X': 
        if(arr[i + 1] == 'L'){
          res = +res + 40;
          i++;
        } else if(arr[i + 1] == 'C'){
          res = +res + 90;
          i++;
        } else {
            res = +res + val[arr[i]];
        }
        break;
      case 'C': 
        if(arr[i + 1] == 'D'){
          res = +res + 400;
          i++;
        } else if(arr[i + 1] == 'M'){
          res = +res + 900;
          i++;
        } else {
            res = +res + val[arr[i]];
        }
        break;
      default:
        res = +res + val[arr[i]];
    }
  }

  return res;
};

console.log(romanToInt('MCMXCIV'));