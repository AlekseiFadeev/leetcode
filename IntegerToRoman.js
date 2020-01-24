var intToRoman = function (num) {
  let val = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    },
    res = '',
    arr = [],
    temp = num;

  for (let i = 0; i < num; i++) {
    if (temp >= 1000) {
      arr.push(1000);
      temp = temp - 1000;
    }else if (temp >= 500){
      arr.push(500);
      temp = temp - 500;
    }else if (temp >= 100){
      arr.push(100);
      temp = temp - 100;
    }else if (temp >= 50){
      arr.push(50);
      temp = temp - 50;
    }else if (temp >= 10){
      arr.push(10);
      temp = temp - 10;
    }else if (temp >= 5){
      arr.push(5);
      temp = temp - 5;
    }else if (temp >= 1){
      arr.push(1);
      temp = temp - 1;
    }
  }

  for(let i = 0; i < arr.length; i++)
  {
    if(arr.length > 3 && (arr[i] == arr[i+3] || arr[i+1] == arr[i+4])) {
      switch(arr[i]){
        case 500:
          if(arr[i+1] == arr[i+4]){
            res = res + val[100] + val[1000];
            i=i+4;
          }
          break;
        case 100:
          if(arr[i+1] == arr[i+4]){
            res = res + val[50] + val[500];
            i=i+4;
          }
          break;
        case 10:
          if(arr[i+1] == arr[i+4]){
            res = res + val[10] + val[100];
            i=i+4;
            console.log("first");
          } else{
            res = res + val[10] + val[50];
            i=i+3;
            console.log("second " + i + " length " + arr.length);
          }
          break;
        case 5:
          if(arr[i+1] == arr[i+4]){
            res = res + val[1] + val[10];
            i=i+3;
          } else{
            res = res + val[1] + val[5];
            i=i+3;
          }
          break;
        default:
          break;
      }
    }else{
      res = res + val[arr[i]];
      console.log("second " + i + " length " + arr.length);
      console.log('third');
    }
  }

  console.log(arr);
  return res;
};

console.log(intToRoman(46));