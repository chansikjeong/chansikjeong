function solution(x) {
  var answer = true;
  let sum = 0;
  let arr = x.toString().split("");
  for (i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return x % sum == 0 ? true : false;
}

// function Harshad(n){
//     return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
//   }
